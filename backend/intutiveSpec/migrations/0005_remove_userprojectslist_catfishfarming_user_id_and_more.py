# Generated by Django 5.0.6 on 2024-07-10 07:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('intutiveSpec', '0004_alter_userprojectslist_catfishfarming_user_id'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprojectslist_catfishfarming',
            name='user_id',
        ),
        migrations.AddField(
            model_name='userprojectslist_catfishfarming',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='owner', to=settings.AUTH_USER_MODEL),
        ),
    ]
