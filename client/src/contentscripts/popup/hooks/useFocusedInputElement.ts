import {useEffect} from "preact/compat";
import createFocusInputHandler from "./createFocusInputHandler.tsx";
import {useState} from "preact/hooks";
import {useClickOutside} from "@mantine/hooks";

export type InputElement = HTMLInputElement | HTMLTextAreaElement

const useFocusedInputElement = () => {
    const [element, setElement] = useState<InputElement>();

    const ref = useClickOutside(() => setElement(undefined));

    useEffect(() => {
        // for focus, we fire during the capture phase as focus doesn't bubble
        const focusHandler = createFocusInputHandler(setElement)
        document.addEventListener('focus', focusHandler, true)
        return () => document.removeEventListener('focus', focusHandler, true)
    }, [])

    return {element, ref};
}

export default useFocusedInputElement;