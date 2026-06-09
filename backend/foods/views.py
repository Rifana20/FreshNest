from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import FoodItem
from .serializers import FoodItemSerializer


class FoodViewSet(viewsets.ModelViewSet):

    serializer_class = FoodItemSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return FoodItem.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )