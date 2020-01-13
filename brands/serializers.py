from rest_framework import serializers
from .models import Category, Brand

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')

class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ('id', 'brand_name', 'logo', 'category', 'description', 'report_link', 'owner', 'company_website', 'ranking', 'our_ranking')
        extra_kwargs = {'report_link': {'required': False}, 'our_ranking': {'required': False}, 'ranking': {'required': False}}

