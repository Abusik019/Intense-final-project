from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .serializers import ReviewSerializer
from .models import Review
from .permissions import IsCommentOwnerOrAdmin


User = get_user_model()


class ReviewViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet
):
    """
    ViewSet для операций над пользователем.
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated, IsCommentOwnerOrAdmin]
    pagination_class = None

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = [AllowAny]
        elif self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        elif self.action == 'update' or self.action == 'destroy':
            self.permission_classes = [IsCommentOwnerOrAdmin]
        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        post_id = request.query_params.get('post_id')
        reviews = Review.objects.filter(post=post_id)
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
