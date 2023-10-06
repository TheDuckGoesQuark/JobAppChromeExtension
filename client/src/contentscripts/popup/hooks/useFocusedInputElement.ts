import {useEffect} from "preact/compat";
import createFocusInputHandler from "./createFocusInputHandler.tsx";
import {useState} from "preact/hooks";

const useFocusedInputElement = () => {
    const [element, setElement] = useState<HTMLInputElement | HTMLTextAreaElement>();

    useEffect(() => {
        const handler = createFocusInputHandler(setElement)
        // for focus, we fire during the capture phase as focus doesn't bubble
        document.addEventListener('focus', handler, true)
        return () => document.removeEventListener("focus", handler, true)
    }, [])

    return element;
}

export default useFocusedInputElement;