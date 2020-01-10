from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Item, SwapRequester
from .serializers import ItemSerializer, SwapRequesterSerializer, PopulatedItemSerializer

class ItemListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
      items = Item.objects.all()
      serialized_items = PopulatedItemSerializer(items, many=True)
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
        serialized_item = PopulatedItemSerializer(item)
        return Response(serialized_item.data)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        item = Item.objects.get(pk=pk)
        if item.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_item = PopulatedItemSerializer(item, data=request.data)
        if updated_item.is_valid():
          updated_item.save()
          return Response(updated_item.data)
        return Response(updated_item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        item = Item.objects.get(pk=pk)
        if item.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        item.delete()
        return Response(status=HTTP_204_NO_CONTENT)

class SwapListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
      request.data['requester'] = request.user.id
      request.data['item'] = pk
      swap_requester = SwapRequesterSerializer(data=request.data)
      if swap_requester.is_valid(): 
          swap_requester.save()
          item = Item.objects.get(pk=pk)
          serialized_item = PopulatedItemSerializer(item)
          return Response(serialized_item.data)
      return Response(swap_requester.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class SwapDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def delete(self, request, request_id, **kwargs):
      swap_requester = SwapRequester.objects.get(pk=request_id)
      if swap_requester.requester.id != request.user.id:
        return Response(status=HTTP_401_UNAUTHORIZED)
      swap_requester.delete()
      return Response(status=HTTP_204_NO_CONTENT)
