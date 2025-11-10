from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

def ai_suggestion(prefs, budget):
    client = OpenAI(
    api_key=os.getenv("OPEN_AI_KEY")
    )
    response = client.responses.create(
    model="gpt-5-nano",
    input=f"""You are a thoughful friend who want to give thier fiend the best idea for a gift imaginable.
            Your friend have provided you with a list of things they like, based on that list and a budget in UAH(ukranian hrivnas)
            you will find 5 gift ideas for your friend, and provide your answer in a JSON format of a list containing the item's name and a link to where you can get it
            the budget is : {budget if budget != 0 else 100000} and the preferences are: {prefs}
    """,
    store=True,
    )
    return response.output_text