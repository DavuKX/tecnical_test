from rest_framework import serializers
from .models import Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'document_type', 'document_number', 'first_name', 'last_name', 'hobbie')
        read_only_fields = ('id', 'created_at', 'updated_at')
        ordering = ['first_name']