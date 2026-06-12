import jwt

from django.contrib.auth.models import User

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

from .jwt_utils import get_signing_key


class SupabaseJWTAuthentication(BaseAuthentication):

    def authenticate(self, request):

        auth_header = request.headers.get(
            "Authorization"
        )

        if not auth_header:
            return None

        parts = auth_header.split(" ")

        if len(parts) != 2 or parts[0].lower() != "bearer":
            raise AuthenticationFailed(
                "Invalid Authorization header"
            )

        token = parts[1]

        try:

            print(
                "HEADER:",
                jwt.get_unverified_header(token)
            )

            payload = jwt.decode(
                token,
                get_signing_key(token),
                algorithms=["ES256"],
                options={
                    "verify_aud": False,
                    "verify_iat": False
                }
            )

            print("PAYLOAD:", payload)

            email = payload.get("email")

            if not email:
                raise AuthenticationFailed(
                    "Email missing in token"
                )

            user, _ = User.objects.get_or_create(
                username=email,
                defaults={
                    "email": email
                }
            )

            return (user, None)

        except Exception as e:

            print("JWT ERROR:", str(e))

            raise AuthenticationFailed(
                str(e)
            )