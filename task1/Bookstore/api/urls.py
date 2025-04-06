from django.urls import path
from . import views

urlpatterns = [
    path('/api/books/', views.Books.as_view(), name='books'),
    path('/api/books/<int:id>/', views.BooksId.as_view(), name='book_id'),
]