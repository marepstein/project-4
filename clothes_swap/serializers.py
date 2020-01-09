from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Item
User = get_user_model()

class UserSerializer(serializers.ModelSerializer): 

  class Meta: 
    model = User
    fields = ('id', 'username', 'owned_items', 'liked_items')

# class CategorySerializer(serializers.ModelSerializer):

#   class Meta:
#     model = Category
#     fields = ('id', 'category')

class ItemSerializer(serializers.ModelSerializer):
  
  class Meta: 
    model = Item
    fields = ('id', 'image', 'title', 'description', 'size', 'original_price', 'category', 'owner', 'swap_requesters')
    extra_kwargs = {'swap_requesters': {'required': False}}

# class PopulatedItemSerializer(ItemSerializer):

#   owner = UserSerializer()
#   swap_requests = UserSerializer(many=True)
#   category = CategorySerializer()