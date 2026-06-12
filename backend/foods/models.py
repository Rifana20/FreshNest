from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class FoodItem(models.Model):

    CATEGORY_CHOICES = [
        ("PANTRY", "Pantry"),
        ("FRIDGE", "Fridge"),
        ("FREEZER", "Freezer"),
        ("MEDICINE", "Medicine"),
    ]

    STATUS_CHOICES = [
        ("ACTIVE", "Active"),
        ("CONSUMED", "Consumed"),
        ("WASTED", "Wasted"),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=100)

    quantity = models.CharField(max_length=50)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )

    purchase_date = models.DateField()

    expiry_date = models.DateField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="ACTIVE"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    @property
    def expiry_status(self):
        today = timezone.now().date()

        if self.expiry_date < today:
            return "Expired"

        elif (self.expiry_date - today).days <= 3:
            return "Expiring Soon"

        return "Fresh"

    def __str__(self):
        return self.name