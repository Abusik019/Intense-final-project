from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, UpdateUser


router = DefaultRouter()
router.register(r'', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('<int:pk>', UpdateUser.as_view())
]
