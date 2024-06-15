from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    """
    Сериализатор для модели Review.
    """
    author = serializers.ReadOnlyField(source='author.username')
    created_at = serializers.ReadOnlyField()

    class Meta:
        model = Review
        fields = ['id', 'author', 'post', 'parent', 'text', 'created_at']


class ReviewUpdate(serializers.ModelSerializer):
    """
    Сериализатор для обновления комента.
    """
    class Meta:
        model = Review
        fields = ['id', 'text',]
