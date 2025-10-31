from rest_framework import serializers
from base.models import Users, Room

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['exchange_date' ,'state', 'room_code', 'name', 'msg', 'budget']