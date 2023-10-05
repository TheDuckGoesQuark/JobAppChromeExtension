import createOnMessageListener from "./messages/createOnMessageListener";
import onSignInChanged from "./onSignInChanged";
import createMessageController from "./messages/messageController";
import {createHandlerRegistry} from "./messages/messageHandlerRegistry";
import {MessageType} from "../../shared/messages";
import logInHandler from "./messages/handlers/logInHandler";
import onFocusHandler from "./messages/handlers/onFocusHandler";

const handlerRegistry = createHandlerRegistry()
handlerRegistry.set(MessageType.logIn, logInHandler)
handlerRegistry.set(MessageType.focusEvent, onFocusHandler)

const messageController = createMessageController(handlerRegistry);
const messageListener = createOnMessageListener(messageController)

chrome.runtime.onMessage.addListener(messageListener);
chrome.identity.onSignInChanged.addListener(onSignInChanged)