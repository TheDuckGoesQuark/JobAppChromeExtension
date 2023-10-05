import MessageSender = chrome.runtime.MessageSender;
import {MessageController} from "./messageController.ts";

type MessageListener = (message: any, sender: MessageSender, sendResponse: (any: any) => void) => void

const createOnMessageListener = (messageController: MessageController): MessageListener => async (request, sender, sendResponse) => {
    const res = await messageController(request, sender);
    if (res) {
        sendResponse(res)
    }
}

export default createOnMessageListener;