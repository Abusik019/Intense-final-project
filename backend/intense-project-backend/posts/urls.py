from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, PostViewSet, GetCategoryList


posts_router = DefaultRouter()
posts_router.register(r'posts', PostViewSet)

users_router = DefaultRouter()
posts_router.register(r'users', UserViewSet)


urlpatterns = [
    path('users/', include(users_router.urls)),

    path('posts/', include(posts_router.urls)),

    path('get_categories', GetCategoryList.as_view())
]
