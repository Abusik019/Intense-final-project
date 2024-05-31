from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import Category, Post, Likes, Favorites


User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    exclude = ('user_permissions', 'groups', 'date_joined', 'last_login')


admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Likes)
admin.site.register(Favorites)
