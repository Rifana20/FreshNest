from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User
import jwt

class SupabaseJWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        auth_header = request.headers.get("Authorization")

        if not auth_header:
            return None

        try:
            token = auth_header.split(" ")[1]

            # decode WITHOUT verifying signature (simple version)
            payload = jwt.decode(token, options={"verify_signature": False})

            email = payload.get("email")

            if not email:
                raise AuthenticationFailed("Invalid token")

            user, _ = User.objects.get_or_create(username=email)

            return (user, None)

        except Exception:
            raise AuthenticationFailed("Invalid authentication")