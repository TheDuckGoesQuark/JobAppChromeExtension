from typing import Union

from fastapi import FastAPI
from routers import answers

app = FastAPI()
app.include_router(answers.router)

