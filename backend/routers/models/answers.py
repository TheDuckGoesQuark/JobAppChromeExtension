from dataclasses import dataclass


@dataclass(frozen=True)
class GetQuestionAnswerResponse:
    answer: str
