from fastapi import APIRouter, Header

from .models import answers
from .services.auth import get_google_user_id

router = APIRouter(
    prefix="/answers",
    tags=["answers"],
    responses={404: {"description": "Not found"}},
)


@router.get("/", response_model=answers.GetQuestionAnswerResponse)
async def read_root(
        question: str = "missing",
        authorization: str | None = Header(default=None),
):
    user_id = get_google_user_id(auth_token=authorization.lstrip("Bearer "))
    return answers.GetQuestionAnswerResponse(question)
