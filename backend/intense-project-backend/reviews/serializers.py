from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели Review.
    """
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Review
        fields = ['id', 'author', 'post', 'parent', 'text', 'created_at']
