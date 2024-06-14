from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

from posts.models import Post


User = get_user_model()


class Review(models.Model):
    """
    Модель комментария.
    """
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review_author')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='review')
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, verbose_name='parent', blank=True, null=True)

    text = models.TextField('Текст', max_length=5000)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.author} - {self.post}'

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
