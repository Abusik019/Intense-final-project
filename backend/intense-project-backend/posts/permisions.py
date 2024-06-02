from rest_framework.permissions import BasePermission, SAFE_METHODS


class ReadOnlyOrIsAuthorOrAdmin(BasePermission):
    """
    Разрешение для взаимодействия со статьей:
    - Разрешает доступ всем пользователям для операций чтения (GET, HEAD, OPTIONS).
    - Разрешает доступ только автору или администратору для операций записи (POST, PUT, PATCH, DELETE).
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        if request.user and request.user.is_staff:
            return True
        elif obj.author == request.user:
            return True
        return False
