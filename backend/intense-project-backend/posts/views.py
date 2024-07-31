from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.generics import ListAPIView, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework.response import Response

from .serializers import PostSerializer, CategorySerializer
from .permisions import ReadOnlyOrIsAuthorOrAdmin
from .models import Post, Category, Likes, Favorites
from .filters import PostFilter


User = get_user_model()


class PostViewSet(viewsets.ModelViewSet):
    """
    ViewSet для постов.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [ReadOnlyOrIsAuthorOrAdmin]
    filter_backends = [DjangoFilterBackend,]
    filterset_class = PostFilter
    filterset_fields = ['category', 'author', 'title']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=False, methods=['get'])
    def my_posts(self, request):
        """
        Метод для получения собственных постов.
        """
        posts = Post.objects.filter(author=request.user)
        serialized_data = PostSerializer(posts, many=True, context={'request': request})
        return Response(serialized_data.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def top3(self, request):
        """
        Метод для получения топ3 залайканных постов.
        """
        posts = Post.objects.annotate(num_likes=Count('likes')).order_by('-num_likes')[:3]
        serialized_data = PostSerializer(posts, many=True, context={'request': request})
        return Response(serialized_data.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def like(self, request, pk=None):
        """
        Метод для добавления, или удаления лайка.
        """
        post = get_object_or_404(Post, pk=pk)
        like, created = Likes.objects.get_or_create(user=request.user, post=post)
        if created:
            return Response(status=status.HTTP_201_CREATED)
        else:
            like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def favorite(self, request, pk=None):
        """
        Метод для добавления, или удаления из избранного.
        """
        post = get_object_or_404(Post, pk=pk)
        favorite, created = Favorites.objects.get_or_create(user=request.user, post=post)
        if created:
            return Response(status=status.HTTP_201_CREATED)
        else:
            favorite.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def my_liked(self, request):
        """
        Метод для отображения лайкнутых статей.
        """
        user = request.user
        liked_posts = Post.objects.filter(likes__user=user)
        serialized_data = PostSerializer(liked_posts, many=True, context={'request': request})
        return Response(serialized_data.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def my_favorite(self, request):
        """
        Метод для отображения избранных статей.
        """
        user = request.user
        favorite_posts = Post.objects.filter(favorites__user=user)
        serialized_data = PostSerializer(favorite_posts, many=True, context={'request': request})
        return Response(serialized_data.data, status=status.HTTP_200_OK)


class GetCategoryList(ListAPIView):
    """
    API endpoint для вывода всех категорий.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None
