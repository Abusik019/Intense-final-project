from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

from .serializers import UserSerializer, PostSerializers
from .permisions import ReadOnlyOrIsAuthorOrAdmin
from .models import Post


User = get_user_model()


class RegisterView(CreateAPIView):
    """
    API endpoint для регистрации пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    permission_classes = [ReadOnlyOrIsAuthorOrAdmin]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
