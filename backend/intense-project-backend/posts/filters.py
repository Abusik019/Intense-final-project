from django_filters import rest_framework as filters
from .models import Post


class PostFilter(filters.FilterSet):
    category = filters.BaseInFilter(field_name='category__id', lookup_expr='in')

    class Meta:
        model = Post
        fields = ['category']
