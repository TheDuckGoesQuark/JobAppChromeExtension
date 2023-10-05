import {sendMessageToBackgroundScript} from "../shared/runtime.ts";
import {MessageType} from "../shared/messages.ts";

const onSignInChangedListener = async (account: chrome.identity.AccountInfo) => {
    await sendMessageToBackgroundScript({type: MessageType.logIn, userAccountInfo: account})
}

export default onSignInChangedListener;
