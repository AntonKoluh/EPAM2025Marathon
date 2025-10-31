from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Users, Room
from .serializers import UsersSerializer, RoomSerializer

@api_view(['GET'])
def getData(request):
    person = {'name': 'me', 'age':20}
    return Response(person)

@api_view(['POST'])
def createroom(request):
    keys = Users.create_user(request.data)
    return Response(keys)

@api_view(['GET'])
def get_room_inv(request, roomid):
    room = Room.objects.filter(room_code=roomid).first()
    return Response({"date":room.exchange_date, "maxPrice":room.budget, "welcomeMsg":room.msg, "name":room.name})

@api_view(['GET'])
def get_room_info(request, room, user):
    room_obj = Room.objects.filter(room_code = room).first()
    user_obj = Users.objects.filter(code=user, room_code=room).first()
    if not user_obj:
        return Response({"error": "Room with user not found"})
    room_serializer = RoomSerializer(room_obj)
    users = Users.object.filter(room_code=room).all()
    users_serializer = UsersSerializer(users, many=True)
    return Response({"room": room_serializer.data, "users":users_serializer.data})