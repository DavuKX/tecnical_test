from  rest_framework import generics
from .models import Person
from .serializers import PersonSerializer

class PersonList(generics.ListCreateAPIView):
    serializer_class = PersonSerializer

    def get_queryset(self):
        return Person.objects.all()

class PersonDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PersonSerializer

    def get_queryset(self):
        return Person.objects.all()
