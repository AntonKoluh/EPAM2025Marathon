from django.urls import path
from . import views

urlpatterns = [
    path('v1/create', views.createroom),
    path('v1/room/<str:roomid>/', views.get_room_inv),
    path('v1/room/<str:room>/<str:user>/', views.get_room_info),
    path('v1/user/<int:id>', views.delete_user),
    path('v1/room/start/<str:room>/<str:user>/', views.start_game),
]