from django.urls import path
from .views import ItemListView, ItemDetailView, SwapListView

urlpatterns = [
    path('items', ItemListView.as_view()),
    path('items/<int:pk>/', ItemDetailView.as_view()),
    path('items/<int:pk>/swap/', SwapListView.as_view())
]