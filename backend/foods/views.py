from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .models import FoodItem
from .serializers import FoodItemSerializer


class FoodListCreateView(generics.ListCreateAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = User.objects.first()

        if user is None:
            raise Exception("No user exists in DB. Create a user first.")

        serializer.save(user=user)