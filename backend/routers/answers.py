from fastapi import APIRouter, Depends
from typing import Annotated

from .models import answers
from .services.answers import get_answer_for_user
from .dependencies import google_auth

CommonsDep = Annotated[str, Depends(google_auth)]

router = APIRouter(
    prefix="/answers",
    tags=["answers"],
    responses={404: {"description": "Not found"}}
)


@router.get("/", response_model=answers.GetQuestionAnswerResponse)
async def read_root(question, google_user_id: CommonsDep):
    answer = get_answer_for_user(question, google_user_id)
    return answers.GetQuestionAnswerResponse(answer)
