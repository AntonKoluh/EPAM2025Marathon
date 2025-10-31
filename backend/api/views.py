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