from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model

from .serializers import UserSerializer
from .permisions import IsAuthorOrAdmin


User = get_user_model()


class RegisterView(CreateAPIView):
    """
    API endpoint для регистрации пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer



    
