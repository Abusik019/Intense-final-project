from django.contrib import admin

from .models import Category, Post, Likes, Favorites


admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Likes)
admin.site.register(Favorites)
