from rest_framework.test import APITestCase
from .models import Person

# Create your tests here.

class PersonTestCase(APITestCase):

    def setUp(self):
        Person.objects.create(
            document_type='CC', 
            document_number='123456789', 
            first_name='Juan', 
            last_name='Perez', 
            hobbie='Coding'
            )
        Person.objects.create(
            document_type='TI',
            document_number='987654321',
            first_name='Maria',
            last_name='Gonzalez',
            hobbie='Reading'
            )
    def test_person_list(self):
        response = self.client.get('/api/person/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 2)

    def test_person_detail(self):
        response = self.client.get('/api/person/1/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['first_name'], 'Juan')
        self.assertEqual(response.json()['last_name'], 'Perez')
        self.assertEqual(response.json()['hobbie'], 'Coding')

    def test_person_create(self):
        response = self.client.post('/api/person/', {
            'document_type': 'CC',
            'document_number': '1004377901',
            'first_name': 'Jhon',
            'last_name': 'Doe',
            'hobbie': 'Coding'
            })
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()['first_name'], 'Jhon')
        self.assertEqual(response.json()['last_name'], 'Doe')
        self.assertEqual(response.json()['hobbie'], 'Coding')

    def test_person_update(self):
        response = self.client.put('/api/person/1/', {
            'document_type': 'CC',
            'document_number': '1004377901',
            'first_name': 'Jhon',
            'last_name': 'Doe',
            'hobbie': 'Reading'
            })
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['first_name'], 'Jhon')
        self.assertEqual(response.json()['last_name'], 'Doe')
        self.assertEqual(response.json()['hobbie'], 'Reading')

    def test_person_delete(self):
        response = self.client.delete('/api/person/1/')
        self.assertEqual(response.status_code, 204)
        self.assertEqual(response.content, b'')
        response = self.client.get('/api/person/1/')
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()['detail'], 'Not found.')
        response = self.client.get('/api/person/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['first_name'], 'Maria')
        self.assertEqual(response.json()[0]['last_name'], 'Gonzalez')
        self.assertEqual(response.json()[0]['hobbie'], 'Reading')





