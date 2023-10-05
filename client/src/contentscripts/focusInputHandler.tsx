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

    const res = await sendMessageToBackgroundScript({type: MessageType.focusEvent, inputElement: activeElement})
    if (res?.type !== MessageType.questionAnswered) {
        return;
    }

    // @ts-ignore
    activeElement.value = res.answer
}

export default focusInputHandler;