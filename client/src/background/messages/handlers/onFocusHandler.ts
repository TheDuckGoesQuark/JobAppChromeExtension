import {MessageTypeHandler} from "../messageHandlerRegistry.ts";
import {FocusEventMessage, MessageType, QuestionAnsweredMessage} from "../../../shared/messages.ts";
import UserInfo = chrome.identity.UserInfo;

const getAuthToken = () => new Promise<string | undefined>((resolve) =>
    chrome.identity.getAuthToken({interactive: true}, resolve))

const getProfileUserInfo = () => new Promise<UserInfo | undefined>((resolve) =>
    chrome.identity.getProfileUserInfo({accountStatus: chrome.identity.AccountStatus.ANY}, resolve))

const onFocusHandler: MessageTypeHandler = async (message) => {
    const onFocusMessage = message as FocusEventMessage
    const authToken = await getAuthToken();
    const profileUserInfo = await getProfileUserInfo();

    // TODO call our fastAPI with the auth token, question, and then pass the answer in the response

    const response: QuestionAnsweredMessage = {
        type: MessageType.questionAnswered,
        question: onFocusMessage.inputElement.textContent ?? "n/a",
        answer: `${authToken} ${profileUserInfo}`
    }

    return response;
}

export default onFocusHandler