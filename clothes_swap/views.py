from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Item
from .serializers import ItemSerializer

class ItemListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
      items = Item.objects.all()
      serialized_items = ItemSerializer(items, many=True)
      return Response(serialized_items.data)

    def post(self, request):
      request.data['owner'] = request.user.id
      item = ItemSerializer(data=request.data)
      if item.is_valid():
            item.save()
            return Response(item.data, status=HTTP_201_CREATED)
      return Response(item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY) 

class ItemDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request, pk): 
        item = Item.objects.get(pk=pk)
        serialized_item = ItemSerializer(item)
        return Response(serialized_item.data)

    def put(self, request, pk):
        item = Item.objects.get(pk=pk)
        updated_item = ItemSerializer(item, data=request.data)
        if item.owner.id == request.user.id:
          request.data['owner'] = request.user.id
          if updated_item.is_valid():
            updated_item.save()
            return Response(updated_item.data)
          return Response(updated_item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        # if item.owner.id != request.user.id:
        #     updated_item.save()
        #     return Response(updated_item.data)
        #   return Response(updated_item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)