from django.db import models

# Create your models here.
class Tweet(models.Model):
    tweetId = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=75)
    tweet = models.CharField(max_length=50)
    createdAt = models.DateTimeField(auto_now_add=True)