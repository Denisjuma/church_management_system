# Generated by Django 5.0.4 on 2024-07-05 14:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Finance', '0008_remove_income_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='income',
            old_name='purpose',
            new_name='contact_info',
        ),
    ]