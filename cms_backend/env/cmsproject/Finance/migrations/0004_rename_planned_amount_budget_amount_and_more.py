# Generated by Django 5.0.4 on 2024-06-12 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Finance', '0003_remove_financialreport_needs_update'),
    ]

    operations = [
        migrations.RenameField(
            model_name='budget',
            old_name='planned_amount',
            new_name='amount',
        ),
        migrations.RenameField(
            model_name='budget',
            old_name='end_date',
            new_name='date',
        ),
        migrations.RemoveField(
            model_name='budget',
            name='start_date',
        ),
        migrations.AddField(
            model_name='budget',
            name='description',
            field=models.TextField(default='No description provided'),
        ),
    ]