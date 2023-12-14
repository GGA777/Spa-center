from .models import Product
from django.forms import ModelForm, TextInput, DateTimeInput

class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price']

        widgets = {
            "name": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Название тарифного плана'
            }),
            "description": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Описание выбранного тарифа'
            }),
            "price": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Цена'
            }),
        }