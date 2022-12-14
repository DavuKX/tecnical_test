# Generated by Django 4.1 on 2022-09-01 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('document_type', models.CharField(choices=[('CC', 'Cedula de Ciudadania'), ('TI', 'Tarjeta de Identidad'), ('RC', 'Registro Civil'), ('CE', 'Cedula de Extranjeria'), ('PAS', 'Pasaporte')], max_length=3)),
                ('document_number', models.CharField(max_length=10)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('hobbie', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Person',
                'verbose_name_plural': 'Persons',
                'ordering': ['first_name'],
            },
        ),
    ]
