enum MessageType {
    logIn,
    focusEvent,
    questionAnswered,
}

type LogInMessage = {
    type: MessageType.logIn
    userAccountInfo: chrome.identity.AccountInfo
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

type Message = LogInMessage
    | FocusEventMessage
    | QuestionAnsweredMessage

export type {
    Message,
    FocusEventMessage,
    LogInMessage,
    QuestionAnsweredMessage
}

export {
    MessageType
}

