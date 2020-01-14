from django.urls import path
from .views import ItemListView, ItemDetailView, SwapListView, SwapDetailView, SwapApprovedDetailView

urlpatterns = [
    path('items', ItemListView.as_view()),
    path('items/<int:pk>/', ItemDetailView.as_view()),
    path('items/swap/<int:pk>/<int:swap_pk>/', SwapListView.as_view()),
    path('items/<int:pk>/swap/<int:request_id>/', SwapDetailView.as_view()),
    path('items/<int:pk>/swapapproval/', SwapApprovedDetailView.as_view())
]