# Generated by Django 3.0.3 on 2020-02-10 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('user_name', models.CharField(max_length=75, primary_key=True, serialize=False)),
                ('tweet', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
