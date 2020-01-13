from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Category, Brand
from .serializers import CategorySerializer, BrandSerializer

# Create your views here.


class BrandListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        brands = Brand.objects.all()
        serialized_brands = BrandSerializer(brands, many=True)
        return Response(serialized_brands.data)

    def post(self, request):
        request.data['owner'] = request.user.id
        brand = BrandSerializer(data=request.data)
        if brand.is_valid():
            brand.save()
            return Response(brand.data, status=HTTP_201_CREATED)
        return Response(brand.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class BrandDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk):
        brand = Brand.objects.get(pk=pk)
        serialized_brand = BrandSerializer(brand)
        return Response(serialized_brand)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        brand = Brand.objects.get(pk=pk)
        if brand.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_brand = BrandSerializer(brand, data=request.data) 
        if updated_brand.is_valid():
            updated_brand.save()
            return Response(updated_brand.data)
        return Response(updated_brand.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        brand = Brand.objects.get(pk=pk)
        if brand.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        brand.delete()
        return Response(status=HTTP_204_NO_CONTENT)

class CategoryListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request): # as stated just a GET (index) for this view
        categories = Category.objects.all() # get  all the categories
        serialized_categories = CategorySerializer(categories, many=True) # serialize them
        return Response(serialized_categories.data) # send them back to the client