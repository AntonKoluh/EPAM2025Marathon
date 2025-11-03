from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from base.models import Users, Room
from .serializers import UsersSerializer, RoomSerializer
from .helpers import user_randomizer

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
    return Response({"date":room.exchange_date, "maxPrice":room.budget,
                        "welcomeMsg":room.msg, "name":room.name})

@api_view(['GET'])
def get_room_info(request, room, user):
    room_obj = Room.objects.filter(room_code = room).first()
    user_obj = Users.objects.filter(code=user, room_code=room).first()
    if not user_obj:
        return Response({"error": "Room with user not found"})
    room_serializer = RoomSerializer(room_obj)
    users = Users.objects.filter(room_code=room)
    if room_obj.master != user:
        for item in users:
            if item.code == user or item.code == room_obj.master or item.code == user_obj.giftee:
                pass
            else:
                item.email = ""
                item.phone = 0
                item.links = [{}]
                item.pref = ""
                item.code = ""
            item.giftee = "" if item.code != user else item.giftee
    
    users_serializer = UsersSerializer(users, many=True)
    users_sorted = sorted(users_serializer.data, key=lambda x: x['admin'], reverse=True)
    return Response({"room": room_serializer.data, "users":users_sorted}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_user(request, id):
    user_code = request.query_params.get("userCode")

    user_to_delete = Users.objects.filter(id=id).first()
    room = Room.objects.filter(room_code=user_to_delete.room_code).first()

    if not user_to_delete or not room:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if room.master != user_code:
        return Response(status=status.HTTP_403_FORBIDDEN)
    
    if user_to_delete.admin:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    user_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def start_game(request, room, user):
    user_obj = Users.objects.filter(code=user).first()
    room_obj = Room.objects.filter(room_code=room).first()
    room_users = Users.objects.filter(room_code=room)
    if not user_obj:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if user_obj.room_code != room or not user_obj.admin:
        return Response(status=status.HTTP_403_FORBIDDEN)
    if len(room_users) < 3:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    room_users = user_randomizer(room_users)
    Users.objects.bulk_update(room_users, ['giftee'])
    users_serializer = UsersSerializer(room_users, many=True)
    users_sorted = sorted(users_serializer.data, key=lambda x: x['admin'], reverse=True)
    room_obj = Room.objects.filter(room_code=room).first()
    room_obj.state = 1
    room_obj.save()

    return Response({"users": users_sorted}, status=status.HTTP_200_OK)