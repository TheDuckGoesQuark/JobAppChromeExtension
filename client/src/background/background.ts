import createOnMessageListener from "./messages/createOnMessageListener.ts";
import createMessageController from "./messages/messageController.ts";
import {createHandlerRegistry} from "./messages/messageHandlerRegistry.ts";
import {MessageType} from "../shared/messages.ts";
import onQuestionAskedHandler from "./messages/handlers/onQuestionAskedHandler.ts";

const handlerRegistry = createHandlerRegistry()
handlerRegistry.set(MessageType.askQuestion, onQuestionAskedHandler)

const messageController = createMessageController(handlerRegistry);
const messageListener = createOnMessageListener(messageController)

chrome.runtime.onMessage.addListener(messageListener);