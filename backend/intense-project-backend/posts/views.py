from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework import mixins

from .serializers import UserSerializer, PostSerializers, CategorySerializer
from .permisions import ReadOnlyOrIsAuthorOrAdmin
from .models import Post, Category
from .filters import PostFilter


User = get_user_model()


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
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
    filter_backends = [DjangoFilterBackend,]
    filterset_class = PostFilter
    filterset_fields = ['category',]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class GetCategoryList(ListAPIView):
    """
    API endpoint для вывода всех категорий.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


# TODO поменять модель юзера, добавить ссылки, описание, поменять сериализатор и сделать добавление аватарки
# TODO профиль, вывод всех статей определенного пользователя (вывод своих статей) и информации пользователя
# TODO коментарии, ответы на коментарии, привязать селери и отправку сообщения на email (по возможности)
# TODO лайки, избранные, просмотр избранных, просмотр лайков
# TODO вывод количества лайков и избранных, сделать top-3 популярных статей
