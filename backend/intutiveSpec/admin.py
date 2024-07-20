from django.contrib import admin

# Register your models here.
from intutiveSpec.models import userProjectsList_catFishFarming

class UserProjects(admin.ModelAdmin):
    list_display = ['title', 'summary']

admin.site.register(userProjectsList_catFishFarming, UserProjects)