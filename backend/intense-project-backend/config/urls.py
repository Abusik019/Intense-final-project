from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from .yasg import urlpatterns as doc_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/users/', include('users.urls')),     # Маршрут для пользовательских представлений.
    path('api/v1/posts/', include('posts.urls')),     # Маршрут для представлений постов.
    path('api/v1/reviews/', include('reviews.urls')), # Маршрут для представлений комментариев.

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),    # Маршрут для получения JWT токена.
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   # Маршрут для обновления JWT токена.
]

urlpatterns += doc_urls
