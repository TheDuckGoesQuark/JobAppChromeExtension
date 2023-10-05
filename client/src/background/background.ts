import createOnMessageListener from "./messages/createOnMessageListener.ts";
import onSignInChanged from "./onSignInChanged.ts";
import createMessageController from "./messages/messageController.ts";
import {createHandlerRegistry} from "./messages/messageHandlerRegistry.ts";
import {MessageType} from "../shared/messages.ts";
import logInHandler from "./messages/handlers/logInHandler.ts";
import onFocusHandler from "./messages/handlers/onFocusHandler.ts";

const handlerRegistry = createHandlerRegistry()
handlerRegistry.set(MessageType.logIn, logInHandler)
handlerRegistry.set(MessageType.focusEvent, onFocusHandler)

const messageController = createMessageController(handlerRegistry);
const messageListener = createOnMessageListener(messageController)

chrome.runtime.onMessage.addListener(messageListener);
chrome.identity.onSignInChanged.addListener(onSignInChanged)