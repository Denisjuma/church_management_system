# Generated by Django 5.0.4 on 2024-07-05 00:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cmsapp', '0002_servicerequest_contact_info'),
    ]

    operations = [
        migrations.RenameField(
            model_name='servicerequest',
            old_name='contact_info',
            new_name='phone',
        ),
    ]
