from rest_framework import serializers
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.apps import apps
from django.contrib.auth import get_user_model
User = get_user_model()
Item = apps.get_model('clothes_swap', 'Item')
SwapRequester = apps.get_model('clothes_swap', 'SwapRequester')

class SwapRequesterSerializer(serializers.ModelSerializer):

  class Meta: 
    model = SwapRequester
    fields = ('id', 'requester', 'item', 'item_to_swap')

class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'image', 'title', 'description', 'size', 'original_price', 'category', 'owner', 'swap_requesters', 'is_swapped')
        extra_kwargs = {'swap_requesters': {'required': False}, 'is_swapped': {'required': False}}

class PopulatedItemSerializer(ItemSerializer):

  swap_requesters = SwapRequesterSerializer(many=True)

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)
    items = PopulatedItemSerializer(many=True, required=False)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation', 'items', 'liked_items')
