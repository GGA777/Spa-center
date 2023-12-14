from django.shortcuts import render, redirect
from products.models import Product
from .forms import ProductForm

def index(request):
    context = {
        'title': 'Eucaliptus',
        'is_promotion': True,
    }
    return render(request, 'products/index.html', context)


def products(request):
    products = Product.objects.all()
    return render(request, 'products/products.html', {'products': products, 'title': 'Eucaliptus - Тарифы'})


def create(request):
    error = ''
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        else:
            error = 'Форма была неверной'

    form = ProductForm()

    data = {
        'form': form,
        'error': error
    }
    return render(request, 'products/create.html', data)

