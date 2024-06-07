from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    Модель пользователя.
    """
    image = models.ImageField('Аватар', upload_to='avatars/', blank=True, null=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'{self.username}'


class Post(models.Model):
    """
    Модель для статей.
    """
    image = models.ImageField('Избражение', upload_to='images/')
    title = models.CharField('Название', max_length=128)
    desc = models.TextField('Основной текст')
    time_to_read = models.CharField('Время на прочтение', max_length=100, blank=True, null=True)
    author = models.ForeignKey(User, verbose_name='Автор', on_delete=models.CASCADE, related_name='posts')
    category = models.ManyToManyField('Category', verbose_name='Категория', related_name='posts')
    created_at = models.DateTimeField('Время создания', auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    def __str__(self):
        categories = ", ".join(category.title for category in self.category.all())
        return f'{self.title} - {categories} | {self.author}'


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

    class Meta:
        unique_together = ('user', 'post')
        verbose_name = 'Лайк'
        verbose_name_plural = 'Лайки'


class Favorites(models.Model):
    """
    Модель избранных.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorite_posts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='favorites')

    class Meta:
        unique_together = ('user', 'post')
        verbose_name = 'Избранное'
        verbose_name_plural = 'Избранное'
