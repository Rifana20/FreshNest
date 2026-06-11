
from django.test import TestCase
from django.contrib.auth.models import User

class UserTest(TestCase):

    def test_user_creation(self):

        user = User.objects.create(
            username="test@test.com"
        )

        self.assertEqual(
            user.username,
            "test@test.com"
        )