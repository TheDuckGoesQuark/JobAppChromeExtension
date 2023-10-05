import {Message, MessageType} from "../../../shared/messages.ts";
import MessageSender = chrome.runtime.MessageSender;

type MessageTypeHandler = (message: Message, sender: MessageSender) => Promise<Message | void>

type MessageHandlerRegistry = Map<MessageType, MessageTypeHandler>

const createHandlerRegistry = (): MessageHandlerRegistry => {
    return new Map<MessageType, MessageTypeHandler>()
}

export {
    createHandlerRegistry
}

export type {
    MessageHandlerRegistry,
    MessageTypeHandler
}