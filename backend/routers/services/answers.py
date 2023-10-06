from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain

from settings import settings

template = """Fill in the field for a job application with the prompt '{prompt}'"""
prompt = PromptTemplate(template=template, input_variables=["prompt"])


def get_answer_for_user(question: str, userId: str):
    # TODO use langchain to answer question
    # TODO persist answers
    # TODO provide a way for users to submit their own answers to learn from
    llm_chain = LLMChain(prompt=prompt, llm=OpenAI(temperature=0, openai_api_key=settings.openai_api_key))
    return llm_chain.predict(prompt=question)
