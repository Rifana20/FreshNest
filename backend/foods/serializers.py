from rest_framework import serializers
from django.utils import timezone
from .models import FoodItem


class FoodItemSerializer(serializers.ModelSerializer):

    expiry_status = serializers.ReadOnlyField()
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = FoodItem
        fields = [
            "id",
            "user",
            "name",
            "quantity",
            "category",
            "purchase_date",
            "expiry_date",
            "status",
            "created_at",
            "expiry_status"
        ]
        read_only_fields = ["id", "created_at", "expiry_status"]

    # ---------- FIELD VALIDATIONS ----------

    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Name too short")
        return value.strip()

    def validate_quantity(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Quantity required")
        return value

    def validate_expiry_date(self, value):
        if value < timezone.now().date():
            raise serializers.ValidationError("Expiry cannot be in past")
        return value

    # ---------- OBJECT LEVEL VALIDATION ----------

    def validate(self, data):
        purchase_date = data.get("purchase_date")
        expiry_date = data.get("expiry_date")

        if purchase_date and expiry_date:
            if expiry_date <= purchase_date:
                raise serializers.ValidationError({
                    "expiry_date": "Must be after purchase date"
                })

        return data