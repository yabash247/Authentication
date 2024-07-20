from django.urls import path
from . import views



urlpatterns = [
    path('', views.getRoutes),
    path('test/', views.testEndPoint, name='test'),
    path('myProjects/', views.get_myProjects, name='myProjects'),
    
]
