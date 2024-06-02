from rest_framework.generics import CreateAPIView, ListAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

from .serializers import UserSerializer, PostSerializers, CategorySerializer
from .permisions import ReadOnlyOrIsAuthorOrAdmin
from .models import Post, Category


User = get_user_model()


class RegisterView(CreateAPIView):
    """
    API endpoint для регистрации пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    ViewSet для постов.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    permission_classes = [ReadOnlyOrIsAuthorOrAdmin]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class GetCategoryList(ListAPIView):
    """
    API endpoint для вывода всех категорий.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


def get_post_by_category(request):
    category = request.kwargs['']
