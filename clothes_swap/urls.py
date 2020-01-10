from django.urls import path
from .views import ItemListView, ItemDetailView, SwapListView, SwapDetailView

urlpatterns = [
    path('items', ItemListView.as_view()),
    path('items/<int:pk>/', ItemDetailView.as_view()),
    path('items/<int:pk>/swap/', SwapListView.as_view()),
    path('items/<int:pk>/swap/<int:request_id>/', SwapDetailView.as_view())
]