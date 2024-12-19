
from rest_framework import serializers # type: ignore
from .models import Event, Announcement, Donation 
from django.contrib.auth.models import User, Group # type: ignore
from rest_framework_simplejwt.tokens import RefreshToken # type: ignore


class eventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        
class announcementSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Announcement
        fields =  '__all__'

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['name']
        
        
class UserSerializer(serializers.ModelSerializer):
     first_name= serializers.SerializerMethodField(read_only=True)
     last_name= serializers.SerializerMethodField(read_only=True)
     id= serializers.SerializerMethodField(read_only=True)
     is_staff= serializers.SerializerMethodField(read_only=True)
     roles = serializers.SerializerMethodField()

     def get_roles(self, user):
        return user.groups.values_list('name', flat=True)
        
     class Meta:
         model = User
         fields = ['id','first_name' ,'last_name',  'username','is_staff', 'email','roles']
         
     def get_id(self,obj):
         return obj.id 
     
     def get_first_name(self,obj):
         return obj.first_name 
     
     def get_last_name(self,obj):
         return obj.last_name 
     
     def get_is_staff(self,obj):
         return obj.is_staff 
    
class UserSerializerWithToken(serializers.ModelSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    role = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','first_name','last_name',  'username', 'is_staff', 'email','token', 'role']
        
        
    def get_token(self,obj):
        token=RefreshToken.for_user(obj) 
        return str(token.access_token)
    
    def get_role(self, obj):
        # Assuming each user is assigned to one role
        role = obj.groups.first()
        if role:
            return role.name
        return None
    
class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'