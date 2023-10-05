import {Message} from "./messages.ts";

const sendMessageToBackgroundScript = async (message: Message) => {
    return await chrome.runtime.sendMessage<Message, Message>(message)
}

export {
    sendMessageToBackgroundScript
}