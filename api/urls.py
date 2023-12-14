from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom

urlpatterns = [
    path('room/', RoomView.as_view(), name='room-view'),
    path('create-room/', CreateRoomView.as_view(), name='create-room-view'),
    path('get-room/', GetRoom.as_view(), name='get-room-view'),
    path('join-room/', JoinRoom.as_view(), name='join-room-view'),
    path('user-in-room/', UserInRoom.as_view(), name='join-room-view')
    
]