from django.db import models

# Create your models here.
class Person(models.Model):
    document_choices = (
        ('CC', 'Cedula de Ciudadania'),
        ('TI', 'Tarjeta de Identidad'),
        ('RC', 'Registro Civil'),
        ('CE', 'Cedula de Extranjeria'),
        ('PAS', 'Pasaporte'),
    )
    document_type = models.CharField(max_length=3, choices=document_choices)
    document_number = models.CharField(max_length=10)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    hobbie = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Person'
        verbose_name_plural = 'Persons'
        ordering = ['first_name']

    def __str__(self):
        return self.first_name + ' ' + self.last_name