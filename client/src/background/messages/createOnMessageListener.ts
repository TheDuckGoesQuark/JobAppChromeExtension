import MessageSender = chrome.runtime.MessageSender;
import {MessageController} from "./messageController.ts";

type MessageListener = (message: any, sender: MessageSender, sendResponse: (any: any) => void) => void

const createOnMessageListener = (messageController: MessageController): MessageListener => (request, sender, sendResponse) => {
    messageController(request, sender).then(sendResponse);
    return true;
}

export default createOnMessageListener;