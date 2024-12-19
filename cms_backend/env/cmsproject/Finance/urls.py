from django.urls import path
from . import views

urlpatterns = [
    path('incomes/', views.income_list, name='income_list'),
    path('incomes/<int:pk>/', views.income_detail, name='income_detail'),
    path('expenses/', views.expense_list, name='expense_list'),
    path('expenses/<int:pk>/', views.expense_detail, name='expense_detail'),
    path('budgets/', views.budget_list, name='budget_list'),
    path('budgets/<int:pk>/', views.budget_detail, name='budget_detail'),
    path('financial-report/', views.financial_report, name='financial_report'),
]
