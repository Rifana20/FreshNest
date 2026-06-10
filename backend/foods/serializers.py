from rest_framework import serializers
from .models import FoodItem


class FoodItemSerializer(serializers.ModelSerializer):

    expiry_status = serializers.ReadOnlyField()

    class Meta:
        model = FoodItem

        fields = [
            "id",
            "name",
            "quantity",
            "category",
            "purchase_date",
            "expiry_date",
            "status",
            "created_at",
            "expiry_status"
        ]

        read_only_fields = [
            "user",
            "expiry_status"
        ]