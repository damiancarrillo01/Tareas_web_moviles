# Generated by Django 4.2.6 on 2023-11-15 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion_1', '0004_equipo_cantintegrantes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='equipo',
            name='descripcion',
            field=models.CharField(default='', max_length=200),
        ),
    ]
