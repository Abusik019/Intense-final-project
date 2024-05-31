from rest_framework.permissions import BasePermission


class IsAuthorOrAdmin(BasePermission):
    """
    Разрешение для взаимодействия со статьей.
    """
    def has_object_permission(self, request, view, obj):
        if request.user and request.user.is_staff:
            return True
        elif obj.author == request.user:
            return True
        return False
