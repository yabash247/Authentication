from rest_framework import serializers
from .models import userProjectsList_catFishFarming


class MyProjectsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = userProjectsList_catFishFarming
        fields = ( 'id','owner', 'title', 'summary')