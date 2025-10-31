from django.urls import path
from . import views

urlpatterns = [
    path('v1/test', views.getData),
    path('v1/create', views.createroom),
    path('v1/room/<str:roomid>/', views.get_room_inv),
]