enum MessageType {
    unknown,
    askQuestion,
    questionAnswered,
}

type AskQuestionMessage = {
    type: MessageType.askQuestion
    question: string
}

type QuestionAnsweredMessage = {
    type: MessageType.questionAnswered
    question: string,
    answer: string,
}

type Message = AskQuestionMessage
    | QuestionAnsweredMessage

export type {
    Message,
    AskQuestionMessage,
    QuestionAnsweredMessage
}

export {
    MessageType
}

