import {MessageTypeHandler} from "../messageHandlerRegistry.ts";
import UserInfo = chrome.identity.UserInfo;

const getAuthToken = () => new Promise<string | undefined>((resolve) =>
    chrome.identity.getAuthToken({interactive: true}, resolve))

const getProfileUserInfo = () => new Promise<UserInfo | undefined>((resolve) =>
    chrome.identity.getProfileUserInfo({accountStatus: chrome.identity.AccountStatus.ANY}, resolve))

const onFocusHandler: MessageTypeHandler = async (message, sender) => {
    const authToken = await getAuthToken();
    const profileUserInfo = await getProfileUserInfo();
    console.log({message, sender, authToken, profileUserInfo})
}

export default onFocusHandler