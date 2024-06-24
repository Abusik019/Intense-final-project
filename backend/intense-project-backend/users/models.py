from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    Модель пользователя.
    """
    image = models.ImageField('Аватар', upload_to='avatars/', blank=True, null=True)
    about_me = models.TextField('Обо мне', blank=True, null=True)
    link = models.URLField('Своя ссылка', blank=True, null=True)
    tg_link = models.URLField('Ссылка на тг', blank=True, null=True)
    linkedin_link = models.URLField('Ссылка на линкедин', blank=True, null=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'{self.username}'
