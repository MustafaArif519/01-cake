# Generated by Django 3.2.22 on 2024-01-03 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cakes', '0003_cake_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cake',
            name='category',
            field=models.CharField(blank=True, default='test', max_length=500),
            preserve_default=False,
        ),
    ]
