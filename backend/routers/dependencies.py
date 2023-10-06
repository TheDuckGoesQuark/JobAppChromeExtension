from routers.services.auth import get_google_user_id
from fastapi import Header


async def google_auth(authorization: str | None = Header(default=None)):
    return get_google_user_id(auth_token=authorization.lstrip("Bearer "))
