from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterView, PostViewSet, GetCategoryList


router = DefaultRouter()
router.register(r'posts', PostViewSet)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('', include(router.urls)),
    path('get_categories', GetCategoryList.as_view())
]
