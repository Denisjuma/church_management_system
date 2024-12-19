from django.db import models
from django.db.models import Sum

class Income(models.Model):
    category = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    donor = models.CharField(max_length=255, null=True)
    contact_info = models.CharField(max_length=255, null=True)
    
   

    def __str__(self):
        return f"{self.category} - {self.amount}"

class Expense(models.Model):
    category = models.CharField(max_length=100)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

    def __str__(self):
        return f"{self.category} - {self.amount}"

class Budget(models.Model):
    category = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.TextField(default="No description provided")

    def __str__(self):
         return f"{self.category} - {self.amount}"
        
        
class FinancialReport(models.Model):
    date = models.DateField(auto_now_add=True)
    total_income = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_expenses = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    net_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def calculate_totals(self):
        self.total_income = Income.objects.aggregate(total=Sum('amount'))['total'] or 0
        self.total_expenses = Expense.objects.aggregate(total=Sum('amount'))['total'] or 0
        self.net_balance = self.total_income - self.total_expenses
        print(f"Total Income: {self.total_income}, Total Expenses: {self.total_expenses}, Net Balance: {self.net_balance}")
        
    def save(self, *args, **kwargs):
         print("Before calculate_totals()")
         self.calculate_totals()
         print("After calculate_totals()")
         super().save(*args, **kwargs)






