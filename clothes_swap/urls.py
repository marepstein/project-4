from django.urls import path
from .views import ItemListView, ItemDetailView, SwapDetailView

urlpatterns = [
    path('items', ItemListView.as_view()),
    path('items/<int:pk>/', ItemDetailView.as_view()),
    path('items/<int:pk>/swap/', SwapDetailView.as_view())
]