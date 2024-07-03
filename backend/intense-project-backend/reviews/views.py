from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .serializers import ReviewSerializer, ReviewUpdate
from .models import Review
from .permissions import IsCommentOwnerOrAdmin
from .email_senders import send_reply_notification, send_review_notification


User = get_user_model()


class ReviewViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet
):
    """
    ViewSet для операций над коментариями.
    """
    queryset = Review.objects.all()
    permission_classes = [IsAuthenticated, IsCommentOwnerOrAdmin]
    pagination_class = None

    def get_permissions(self):
        if self.action == 'retrieve':
            self.permission_classes = [AllowAny]
        elif self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        elif self.action == 'update' or self.action == 'destroy':
            self.permission_classes = [IsCommentOwnerOrAdmin]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == 'update':
            self.serializer_class = ReviewUpdate
        else:
            self.serializer_class = ReviewSerializer
        return super().get_serializer_class()

    def perform_create(self, serializer):
        review = serializer.save(author=self.request.user)
        post_author = review.post.author
        if f'{review.author}' != f'{post_author}':
            send_review_notification(instance=review, created=True)
        if review.parent is not None:
            send_reply_notification(instance=review, created=True)

    def retrieve(self, request, *args, **kwargs):
        post_id = kwargs.get('pk')
        reviews = Review.objects.filter(post_id=post_id)
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
