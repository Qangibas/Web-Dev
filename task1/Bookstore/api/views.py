from django.shortcuts import render
from django.views import View
from rest_framework import generics
from serializers import BookSerializer
from task1.Bookstore.api.models import Book


class Books(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BooksId(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return Book.objects.filter(id=id)