from django.db import models
from django.contrib.auth.models import User


class RecipeSuggestion(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    ingredients_used = models.TextField()

    prompt_used = models.TextField(
        blank=True,
        null=True
    )

    recipe_response = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"Recipe for {self.user.username}"