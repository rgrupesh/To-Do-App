from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializers
from .models import Todo

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializers
    queryset = Todo.objects.all()
    
