# Generated by Django 5.0.3 on 2024-05-15 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applibreria', '0003_rename_menssenger_contact_messege_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='credential',
            name='email',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
