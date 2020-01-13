from django.urls import path
from .views import BrandListView, BrandDetailView, CategoryListView

urlpatterns = [
    path('brands', BrandListView.as_view()),
    path('brands/<int:pk>/', BrandDetailView.as_view()),
    path('categories', CategoryListView.as_view())
]
