import logging

import requests

def get_google_user_id(auth_token: str):
    Headers = {"Authorization": "Bearer " + auth_token}
    response = requests.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", headers=Headers)
    body = response.json()
    user_id = body["id"]
    return user_id
