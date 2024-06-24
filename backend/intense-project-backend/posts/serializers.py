from rest_framework import serializers

from .models import Post, Category, Likes, Favorites


class CategorySerializer(serializers.ModelSerializer):
    """
    Сериализатор для категорий.
    """
    class Meta:
        model = Category
        fields = ['id', 'title']


class PostSerializer(serializers.ModelSerializer):
    """
    Сериализатор для статей.
    """
    author = serializers.ReadOnlyField(source='author.username')
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), source='category', write_only=True)
    like_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    is_favorite = serializers.SerializerMethodField()
    created_at = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'desc',
            'time_to_read', 'image', 'category',
            'like_count', 'is_liked', 'is_favorite',
            'category_id', 'author', 'created_at'
        ]

    def get_like_count(self, obj):
        """
        Метод для отображения количества лайков
        """
        return obj.likes.count()

    def get_is_liked(self, obj):
        """
        Метод для отображения того, лайкнул ли пользователь статью.
        """
        user = self.context.get('request').user
        if user.is_authenticated:
            return obj.likes.filter(user=user).exists()
        return False

    def get_is_favorite(self, obj):
        """
        Метод для отображения того, добавил ли пользователь в избранное статью.
        """
        user = self.context.get('request').user
        if user.is_authenticated:
            return obj.favorites.filter(user=user).exists()
        return False
