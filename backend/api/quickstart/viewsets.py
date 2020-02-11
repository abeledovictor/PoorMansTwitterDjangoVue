from rest_framework import viewsets
from .models import Tweet
from .serializers import TweetSerializer
from django.db.models.functions import Lower
class TweetViewSet(viewsets.ModelViewSet):
    serializer_class = TweetSerializer
    def get_queryset(self):
        queryset = Tweet.objects.all()
        sort = self.request.query_params.get('sort', None)
        if sort is not None:
            queryset = queryset.order_by(Lower(sort))
        return queryset