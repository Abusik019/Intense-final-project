from rest_framework.permissions import BasePermission


class IsCommentOwnerOrAdmin(BasePermission):
    """
    Пользователь может редактировать или удалять комментарий, если он:
    - администратор
    - владелец комментария
    """
    def has_object_permission(self, request, view, obj):
        if request.user and request.user.is_staff:
            return True

        if obj.author == request.user:
            return True

        return False
