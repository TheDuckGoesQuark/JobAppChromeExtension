import requests


def get_google_user_id(auth_token: str):
    headers = {"Authorization": "Bearer " + auth_token}
    response = requests.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", headers=headers)
    body = response.json()
    user_id = body["id"]

    if user_id is None:
        raise Exception("User in not authorized")

    return user_id
