from django.db import models
from django.forms import ValidationError
import uuid
import base64
from datetime import datetime

def generate_uid(length=6):
    uid_bytes = uuid.uuid4().bytes
    uid_b64 = base64.urlsafe_b64encode(uid_bytes).decode('utf-8').rstrip('=')
    return uid_b64[:length]

class Room(models.Model):
    master = models.CharField(max_length=8)
    exchange_date = models.DateField()
    state = models.BooleanField(default=False)
    room_code = models.CharField(max_length=8)
    name = models.CharField(max_length=50)
    msg = models.CharField(max_length=200)
    budget = models.IntegerField(default=0)

    @classmethod
    def create_room(cls, room, master):
        """
        Creates a new room
        """
        room_key = generate_uid()
        date_obj = datetime.strptime(room.get("date"), "%m/%d/%Y").date()
        while cls.objects.filter(room_code = room_key).exists():
            room_key = generate_uid()
        new_room = cls(master=master, exchange_date=date_obj, room_code=room_key, name=room.get("roomName"), msg=room.get("welcomeMsg"), budget=room.get("maxPrice"))
        new_room.save()
        return room_key

def validate_items(value):
    if not isinstance(value, list) or not all(isinstance(x, dict) for x in value):
        raise ValidationError("Must be a list of dictionaries.")


class Users(models.Model):
    fn = models.CharField(max_length=50)
    ln = models.CharField(max_length=50)
    phone = models.IntegerField()
    email = models.CharField(max_length=100, null=True, blank=True)
    adress = models.CharField(max_length=250)
    admin = models.BooleanField(default=False)
    pref = models.CharField(max_length=250, null=True, blank=True)
    links = models.JSONField(default=list, validators=[validate_items], blank=True)
    code = models.CharField(max_length=7)
    room_code = models.CharField(max_length=10, blank=True)
    active = models.BooleanField(default=True)

    @classmethod
    def create_user(cls, data):
        """
        Creates a new user
        """
        user = data.get("userData") 
        wish = data.get("wish")
        pref = data.get("pref")
        room_key = data.get("room_key")
        generate_user_code = generate_uid()
        while cls.objects.filter(code = generate_user_code).exists():
            generate_user_code = generate_uid()
        phone = "+380" + user.get('phone') if user.get('phone') != "" else ""
        new_user = cls(fn=user.get('fn'), ln=user.get('ln'), phone=phone, email=user.get('email'), adress=user.get('adress'), pref=pref, links=wish, code=generate_user_code, room_code=room_key)
        print(room_key)
        if data.get("room").get('roomName') != '':
            room_key = Room.create_room(data.get("room"), generate_user_code)
            new_user.admin = True
            new_user.room_code = room_key

        new_user.save()

        return {"room": room_key, "user": generate_user_code}
