from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    Модель пользователя.
    """
    pass

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'{self.username}'


class Category(models.Model):
    """
    Модель категорий.
    """
    title = models.CharField('Категория', max_length=128)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return f'{self.title}'


class Likes(models.Model):
    """
    Модель лайков.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liked_posts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='likes')


class Favorites(models.Model):
    """
    Модель избранных.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorite_posts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='favorites')
