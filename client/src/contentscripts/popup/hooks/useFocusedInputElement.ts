import {useEffect} from "preact/compat";
import createFocusInputHandler from "./createFocusInputHandler.tsx";
import {useState} from "preact/hooks";

export type InputElement = HTMLInputElement | HTMLTextAreaElement

const useFocusedInputElement = () => {
    const [element, setElement] = useState<InputElement>();

    useEffect(() => {
        // for focus, we fire during the capture phase as focus doesn't bubble
        const focusHandler = createFocusInputHandler(setElement)
        document.addEventListener('focus', focusHandler, true)
        // on focusout, we remove the currently focused element
        const focusOutHandler = () => setElement(undefined);
        document.addEventListener('focusout', focusOutHandler)

        return () => {
            document.removeEventListener('focus', focusHandler, true)
            document.removeEventListener('focusout', focusOutHandler)
        }
    }, [])

    return element;
}

export default useFocusedInputElement;