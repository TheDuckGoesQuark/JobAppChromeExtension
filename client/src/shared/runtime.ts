import {Message} from "./messages.ts";

const sendMessageToBackgroundScript = async (message: Message) => {
    return new Promise<Message | void>((resolve) => chrome.runtime.sendMessage<Message, Message | void>(message, resolve))
}

export {
    sendMessageToBackgroundScript
}