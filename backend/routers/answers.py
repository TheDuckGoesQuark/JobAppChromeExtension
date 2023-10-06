from fastapi import APIRouter

router = APIRouter(
    prefix="/answers",
    tags=["answers"],
    responses={404: {"description": "Not found"}}
)


@router.get("/")
async def read_root(question: str = "missing"):
    return {"Hello World": question}
