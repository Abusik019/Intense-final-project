from rest_framework import serializers

from .models import Post, Category


class CategorySerializer(serializers.ModelSerializer):
    """
    Сериализатор для категорий.
    """
    class Meta:
        model = Category
        fields = ['id', 'title']


class PostSerializers(serializers.ModelSerializer):
    """
    Сериализатор для статей.
    """
    author = serializers.ReadOnlyField(source='author.username')
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True)

    class Meta:
        model = Post
        fields = ['title', 'desc', 'time_to_read', 'image', 'category', 'author', 'created_at']
