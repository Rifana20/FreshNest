from django.conf import settings
from jwt import PyJWKClient

print(settings.SUPABASE_JWKS_URL)
jwks_client = PyJWKClient(
    settings.SUPABASE_JWKS_URL
)

def get_signing_key(token):
    return jwks_client.get_signing_key_from_jwt(token).key