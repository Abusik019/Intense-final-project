from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import PostViewSet, GetCategoryList


router = DefaultRouter()
router.register(r'', PostViewSet)


urlpatterns = [
    path('', include(router.urls)),

    path('get_categories', GetCategoryList.as_view())
]
