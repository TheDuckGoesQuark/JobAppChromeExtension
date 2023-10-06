from fastapi import APIRouter

from .models import answers

router = APIRouter(
    prefix="/answers",
    tags=["answers"],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def read_root(question: str = "missing"):
    return answers.GetQuestionAnswerResponse(question)
