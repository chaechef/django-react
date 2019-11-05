#backend/post/urls.py
from django.urls import path
from . import views


urlpatterns = [
    path('', views.ListChicken.as_view()),
    path('<int:pk>/', views.DetailChicken.as_view()),
] 