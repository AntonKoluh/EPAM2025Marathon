import random

def user_randomizer(user_list):
    shuffled = user_list[:]  
    random.shuffle(shuffled)
    assigned = shuffled[1:] + shuffled[:1]
    for idx, item in enumerate(user_list):
        item.giftee = assigned[idx].code
    for item in shuffled:
        if item.code == item.giftee:
            user_randomizer(user_list)
    return shuffled