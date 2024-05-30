from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),     # Маршрут для пользовательских представлений.

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),    # Маршрут для получения JWT токена.
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   # Маршрут для обновления JWT токена.
]
