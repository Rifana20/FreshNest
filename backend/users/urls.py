from django.urls import path
from .views import ProfileView, RegisterUser, LoginUser

urlpatterns = [
    path("register/", RegisterUser.as_view()),
    path("login/", LoginUser.as_view()),
    path("profile/", ProfileView.as_view()),
]

