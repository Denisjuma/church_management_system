from django.urls import path # type: ignore
from cmsapp import views
from .views import logout_view
from rest_framework_simplejwt.views import ( # type: ignore
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getRoutes, name='getRoutes'),
    path('getAnnouncements/', views.getAnnouncements, name='getAnnouncements'),
    path('getEvents/', views.getEvents, name='getEvents'),
    path('getEvent/<str:pk>/', views.getEvent, name='getEvent'),
    path('event/<str:pk>/update/', views. update_event, name='getEvent'),
    path('getAnnouncement/<str:pk>/', views.getAnnouncement, name='getAnnouncement'),
    path('announcement/<str:pk>/update/', views.update_announcement, name='update_announcement'),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', logout_view, name='logout'),
    path('users/profile/', views.get_user_profile, name="get_user_profile"),
    path('users/', views.get_users, name="get_users"),
    path('users/<int:pk>/', views.user_detail_view, name='user-detail'),
    path('users/<int:id>/update/', views.update_user, name='update_user'),
    path('users/<int:id>/delete/', views.delete_user, name='delete_user'),
    path('users/roles/',views.get_users_by_roles, name='get_users_by_roles'),
    path('users/register/', views.register_user, name='register_user'),
    path('activate/<uidb64>/<token>', views.ActivateAccountView.as_view(), name='activate'),
    path('donation/',views. user_donation, name='user_donation'),
    path('donation/<int:pk>/', views.user_donation, name='user_donation_detail'),
]
