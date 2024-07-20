from django.shortcuts import render
from django.http import JsonResponse
from users.models import User
from .models import userProjectsList_catFishFarming

from intutiveSpec.serializer import MyProjectsListSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/intutiveSpec/token/',
        '/intutiveSpec/register/',
        '/intutiveSpec/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    pre = request
    if request.method == 'GET':
        data = f"Congrats {request.user.username}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_myProjects(request):
    user = request.user
    myProjects = userProjectsList_catFishFarming.objects.filter(owner=user.id)
    serializer = MyProjectsListSerializer(myProjects, many=True)
    return Response(serializer.data)
