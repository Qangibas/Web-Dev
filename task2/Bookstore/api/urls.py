from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.Books.as_view(), name='books'),
    path('books/<int:id>/', views.BooksId.as_view(), name='book_id'),
]