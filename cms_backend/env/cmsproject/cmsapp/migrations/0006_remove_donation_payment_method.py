# Generated by Django 5.0.4 on 2024-07-05 01:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cmsapp', '0005_rename_contact_donation_contact_field'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donation',
            name='payment_method',
        ),
    ]
