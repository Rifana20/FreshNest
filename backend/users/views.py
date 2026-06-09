from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from config.supabase import supabase


class RegisterUser(APIView):

    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        try:
            result = supabase.auth.sign_up({
                "email": email,
                "password": password
            })

            return Response({
                "message": "User Registered",
                "user_id": result.user.id,
                "email": result.user.email
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({
                "message": "Registration failed",
                "error": str(e)
            }, status=status.HTTP_400_BAD_REQUEST)

class LoginUser(APIView):

    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        try:
            result = supabase.auth.sign_in_with_password({
                "email": email,
                "password": password
            })

            return Response({
                "access_token": result.session.access_token,
                "refresh_token": result.session.refresh_token
            })

        except Exception as e:
            return Response({
                "error": str(e)
            }, status=status.HTTP_400_BAD_REQUEST)