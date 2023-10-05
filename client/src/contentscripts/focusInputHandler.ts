import {sendMessageToBackgroundScript} from "../shared/runtime.ts";
import {MessageType} from "../shared/messages.ts";

const INPUTS = ["input", "textarea"];

const isInputElement = (element: Element) => INPUTS.indexOf(element.tagName.toLowerCase()) !== -1

const focusInputHandler = async (e: FocusEvent) => {
    const activeElement = (e.target as Element);

    if (!activeElement || !activeElement.tagName) {
        return;
    }

    if (!isInputElement(activeElement)) {
        return;
    }

    await sendMessageToBackgroundScript({type: MessageType.focusEvent, inputElement: activeElement})
}

export default focusInputHandler;