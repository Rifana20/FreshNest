from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import FoodItem
from .serializers import FoodItemSerializer


class FoodViewSet(viewsets.ModelViewSet):

    serializer_class = FoodItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        queryset = FoodItem.objects.filter(
            user=self.request.user
        )

        category = self.request.query_params.get("category")
        status = self.request.query_params.get("status")

        if category:
            queryset = queryset.filter(
                category__iexact=category
            )

        if status:
            queryset = queryset.filter(
                status__iexact=status
            )

        return queryset

    def perform_create(self, serializer):

        serializer.save(
            user=self.request.user
        )