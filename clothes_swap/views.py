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
        request.data['owner'] = request.user.id
        item = Item.objects.get(pk=pk)
        if item.owner.id != request.user.id:  # quick check to see if the user making the request is the same user who created the post, if not don't allow updates
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_item = ItemSerializer(item, data=request.data)
        if updated_item.is_valid():
          updated_item.save()
          return Response(updated_item.data)
        return Response(updated_item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class SwapDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def put(self, request, pk):
        item = Item.objects.get(pk=pk)
        # request.data['owner'] = request.user.id
        # serialized_item = ItemSerializer(item)
        
        if item.owner.id == request.user.id:
          return Response(status=HTTP_401_UNAUTHORIZED)
        item.swap_requesters.set([2])
        print(item.swap_requesters)
        print(type(item.swap_requesters))
        updated_item = ItemSerializer(item, data=request.data)
        if updated_item.is_valid():
          updated_item.save()
          return Response(updated_item.data)
        return Response(Response(updated_item.errors, status=HTTP_422_UNPROCESSABLE_ENTITY))