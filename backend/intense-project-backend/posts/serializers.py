from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

from .models import Post, Category


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """
    Сериализатор пользователя.
    """
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password_again = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'image', 'password', 'password_again']

    def validate(self, attrs):
        if attrs['password'] != attrs['password_again']:
            raise serializers.ValidationError({'password': 'Пароли не совпадают'})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_again')
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            image=validated_data['image'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance


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
