const INPUTS = ["input", "textarea"];

const isInputElement = (element: Element) => INPUTS.indexOf(element.tagName.toLowerCase()) !== -1

const createFocusInputHandler = (onInputElementFocused: (element: HTMLInputElement | HTMLTextAreaElement) => void) => (e: FocusEvent) => {
    const activeElement = (e.target as Element);

    if (!activeElement || !activeElement.tagName) {
        return;
    }

    if (!isInputElement(activeElement)) {
        return;
    }

    onInputElementFocused(activeElement as (HTMLInputElement | HTMLTextAreaElement))
}

export default createFocusInputHandler;