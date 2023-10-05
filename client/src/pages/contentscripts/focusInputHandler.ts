import {sendMessageToBackgroundScript} from "../../shared/runtime";
import {MessageType} from "../../shared/messages";

const INPUTS = ["input"];

const isInputElement = (element: Element) => INPUTS.indexOf(element.tagName.toLowerCase()) !== -1

const focusInputHandler = async (e: FocusEvent) => {
    const activeElement = document.activeElement
    if (!(e.relatedTarget && activeElement)) {
        return;
    }

    if (!isInputElement(activeElement)) {
        return;
    }

    await sendMessageToBackgroundScript({type: MessageType.focusEvent, inputElement: activeElement})
}

export default focusInputHandler;