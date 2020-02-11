from rest_framework import routers
from api.quickstart.viewsets import TweetViewSet
router = routers.DefaultRouter()
router.register(r'tweets', TweetViewSet, basename='Tweet')