from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response

from .serializers import UserSerializer, UserUpdateSerializer
from .permissions import IsAdminOrSelf, IsOwner


User = get_user_model()


class UserViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet
):
    """
    ViewSet для операций над пользователем.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == 'destroy':
            self.permission_classes = [IsAuthenticated, IsAdminOrSelf]
        else:
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class UpdateUser(UpdateAPIView):
    """
    API endpoint для обновления пользователя.
    """
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = [IsOwner]
