enum MessageType {
    logIn,
    focusEvent
}

type LogInMessage = {
    type: MessageType.logIn
    userAccountInfo: chrome.identity.AccountInfo
}

type FocusEventMessage = {
    type: MessageType.focusEvent
    inputElement: Element
}

type Message = LogInMessage
    | FocusEventMessage

export type {
    Message,
    FocusEventMessage,
    LogInMessage,
}

export {
    MessageType
}

