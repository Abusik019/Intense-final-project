from django_filters import rest_framework as filters
from .models import Post


class PostFilter(filters.FilterSet):
    category = filters.BaseInFilter(field_name='category__id')
    author = filters.BaseInFilter(field_name='author__id')
    title = filters.BaseInFilter(field_name='title')

    class Meta:
        model = Post
        fields = ['category', 'author', 'title']
