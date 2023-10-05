import {Message} from "../../../shared/messages.ts";
import {MessageHandlerRegistry} from "./messageHandlerRegistry.ts";
import MessageSender = chrome.runtime.MessageSender;

type MessageController = (message: Message, sender: MessageSender) => Promise<Message | void>

const createMessageController = (messageHandlerRegistry: MessageHandlerRegistry): MessageController => {
    return async (message, sender) => {
        const handler = messageHandlerRegistry.get(message.type);
        if (!handler) {
            console.error(`No handler for message type ${message.type}`)
            return;
        }

        return await handler(message, sender)
    }
}

export type {
    MessageController
}

export default createMessageController;