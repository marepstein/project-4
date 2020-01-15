from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Item, SwapRequester
User = get_user_model()

class UserSerializer(serializers.ModelSerializer): 

  class Meta: 
    model = User
    fields = ('id', 'username', 'email')

class SwapRequesterSerializer(serializers.ModelSerializer):

  class Meta: 
    model = SwapRequester
    fields = ('id', 'requester', 'item', 'item_to_swap')

class PopulatedSwapRequesterSerializer(SwapRequesterSerializer):

  requester = UserSerializer()


class ItemSerializer(serializers.ModelSerializer):
  
  class Meta: 
    model = Item
    fields = ('id', 'image', 'title', 'description', 'size', 'original_price', 'category', 'owner', 'swap_requesters', 'is_swapped')
    extra_kwargs = {'swap_requesters': {'required': False}, 'is_swapped': {'required': False}}

class PopulatedItemSerializer(ItemSerializer):

  swap_requesters = PopulatedSwapRequesterSerializer(many=True)
  owner = UserSerializer()

class SwapItemSerializer(serializers.ModelSerializer):
  
  class Meta: 
    model = Item
    fields = '__all__'
    extra_kwargs = {'image': {'required': False}, 'title': {'required': False}, 'description': {'required': False}, 'size': {'required': False}, 'original_price': {'required': False}, 'category': {'required': False}, 'owner': {'required': False}, 'swap_requesters': {'required': False}}