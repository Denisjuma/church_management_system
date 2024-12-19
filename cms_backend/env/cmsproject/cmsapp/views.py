from django.shortcuts import render # type: ignore
from django.http import JsonResponse # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view, permission_classes# type: ignore
from django.contrib.auth import authenticate # type: ignore
from .serializer import eventSerializer, announcementSerializer, UserSerializer,UserSerializerWithToken, DonationSerializer
from .models import Event, Announcement, Donation # type: ignore
from django.contrib.auth.models import User , Group# type: ignore
from rest_framework import status # type: ignore
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # type: ignore
from rest_framework_simplejwt.views import TokenObtainPairView # type: ignore
from rest_framework.permissions import IsAuthenticated, IsAdminUser # type: ignore
from django.contrib.auth.hashers import make_password # type: ignore
from django.shortcuts import get_object_or_404 # type: ignore
from django.contrib.auth import logout
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken # type: ignore
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken # type: ignore
from rest_framework_simplejwt.tokens import RefreshToken # type: ignore


# for sending mails and generate token
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .utils import TokenGenerator, generate_token
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.core.mail import EmailMessage
from django.conf import settings
from django.views.generic import View


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello Denis')

@api_view(['GET'])
def getAnnouncements(request):
    announcement = Announcement.objects.all()
    serializer = announcementSerializer(announcement, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEvents(request):
    event = Event.objects.all()
    serializer = eventSerializer(event, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEvent(request, pk):
    try:
        event = Event.objects.get(pk=pk)
        serializer = eventSerializer(event, many=False)
        return Response(serializer.data)
    except Event.DoesNotExist:
        return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
    
    
@api_view(['GET'])
def getAnnouncement(request, pk):
    try:
         annoucement = Announcement.objects.get(pk=pk)
         serializer = announcementSerializer(annoucement, many=False)
         return Response(serializer.data)
    except Announcement.DoesNotExist:
        return Response({'error':'annoucement not found'}, status=status.HTTP_404_NOT_FOUND)

    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v
            
        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_users(request):
    roles = ['member']
    groups = Group.objects.filter(name__in=roles)
    user = User.objects.filter(is_superuser=False, is_staff=False, groups__in=groups)
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    data = request.data

    # Validate other required fields
    required_fields = ['role','first_name', 'last_name', 'email', 'username', 'password1', 'password2']
    for field in required_fields:
        if field not in data:
            return Response({'error': f'Missing {field} field'}, status=status.HTTP_400_BAD_REQUEST)

    # Check if passwords match
    if data['password1'] != data['password2']:
        return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the user with the provided email already exists
    if User.objects.filter(email=data['email']).exists():
        return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
   
    # Create the user instance
    user = User.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        username=data['email'],
        password=make_password(data['password1']),
        
    )

    # Assign role based on the selected role
    role = data['role']
    if role == 'accountant':
        group = get_object_or_404(Group, name='accountant')  # Assuming you have a group named 'Accountant'
    elif role == 'pastor':
        group = get_object_or_404(Group, name='pastor')  # Assuming you have a group named 'Pastor'
    elif role == 'secretary':
        group = get_object_or_404(Group, name='secretary')  # Assuming you have a group named 'Pastor'
    elif role == 'member':
        group = get_object_or_404(Group, name='member')  # Assuming you have a group named 'Pastor'
    else:
        return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)

    # Add the user to the group
    user.groups.add(group)
    
    """
    # Generate token for sending mails
    email_subject = "Activate Your Account"
    message = render_to_string(
        'activate.html',
       {
         'user': user,
        'domain': '127.0.0.1:8000',
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': generate_token.make_token(user),
       }
    )
    context = {'message': message}
    return render(request, 'activationLink.html',context)
    # print(message)
    # Send message to the user
    # email_message =EmailMessage(email_subject, message, settings.EMAIL_HOST_USER, [data['email']])
    #  email_message.send()   """
   
    # Serialize the user and return the response
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


class ActivateAccountView(View):
    def get(self, request, uidb64, token):
        try: 
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except Exception as identifier:
            user=None
        if user is not None and generate_token.check_token(user, token):
           user.is_active=True
           user.save()
           return render(request, 'ActivateSuccess.html',)
        else:
            return render(request, 'ActivateFail.html',)
        
        
        
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data['refresh']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data.get('refresh')
        if not refresh_token:
            return Response({"detail": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)

        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
    except TokenError as e:
        return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"detail": "An error occurred during logout."}, status=status.HTTP_400_BAD_REQUEST)


# get user by role
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_users_by_roles(request):
    roles = ['accountant', 'pastor', 'secretary']
    try:
        # Get all groups with the specified names
        groups = Group.objects.filter(name__in=roles)
        # Get all users in those groups
        users = User.objects.filter(groups__in=groups).distinct()
    except Group.DoesNotExist:
        return Response({"detail": "One or more roles not found."}, status=404)
    
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

#get user details 
@api_view(['GET'])
@permission_classes([IsAdminUser])
def user_detail_view(request, pk):
    try:
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({'detail': 'User not found'}, status=404)

#Update user
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_user(request, id):
    try:
        user = User.objects.get(pk=id)
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Delete user
@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_user(request, id):
    try:
        user = User.objects.get(pk=id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)
    
    
#Update Announcement
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_announcement(request, pk):
    try:
        annoucement = Announcement.objects.get(pk=pk)
    except Announcement.DoesNotExist:
        return Response({"detail": "Announcement not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = announcementSerializer(annoucement, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Update Announcement
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_event(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return Response({"detail": "Announcement not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = eventSerializer(event, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_donation(request, pk=None):
    if request.method == 'GET':
        if pk:
            try:
                donation = Donation.objects.get(pk=pk)
                serializer = DonationSerializer(donation)
                return Response(serializer.data)
            except Donation.DoesNotExist:
                return Response({'error': 'Donation not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            donations = Donation.objects.all()
            serializer = DonationSerializer(donations, many=True)
            return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        try:
            donation = Donation.objects.get(pk=pk)
        except Donation.DoesNotExist:
            return Response({'error': 'Donation not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = DonationSerializer(donation, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    