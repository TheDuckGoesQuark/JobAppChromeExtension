enum MessageType {
    unknown,
    focusEvent,
    questionAnswered,
}

type FocusEventMessage = {
    type: MessageType.focusEvent
    inputElement: Element
}

type QuestionAnsweredMessage = {
    type: MessageType.questionAnswered
    question: string,
    answer: string,
}

type Message = FocusEventMessage
    | QuestionAnsweredMessage

export type {
    Message,
    FocusEventMessage,
    QuestionAnsweredMessage
}

export {
    MessageType
}

