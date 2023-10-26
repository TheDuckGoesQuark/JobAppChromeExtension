import useFocusedInputElement, {InputElement} from "./hooks/useFocusedInputElement.ts";
import {useState} from "preact/hooks";
import {FC, useEffect} from "preact/compat";
import {Container, ContainerProps, Text} from "@mantine/core";
import '@mantine/core/styles.css';


const useContainerProps = (focusedElement: InputElement | undefined): ContainerProps => {
    const rect = focusedElement?.getBoundingClientRect()

    return {
        pos: "absolute",
        left: rect?.left,
        top: (rect?.bottom ?? 0) + 25,
        bg: "white",
        style: {zIndex: 999}
    }
}

const App: FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {element: focusedElement, ref} = useFocusedInputElement();
    const containerProps = useContainerProps(focusedElement)

    // TODO render "submit question", fire the below to populate the field
    // const res = await sendMessageToBackgroundScript({type: MessageType.focusEvent, inputElement: activeElement})
    // if (res?.type !== MessageType.questionAnswered) {
    //     return;
    // }
    //
    // // @ts-ignore
    // activeElement.value = res.answer

    useEffect(() => {
        setShowPopup(true);
    }, [focusedElement])

    if (!(focusedElement && showPopup)) return <></>;
    else return <Container {...containerProps} ref={ref}>
        <Text>hello! Click <a onClick={() => setShowPopup(false)}>here</a> to close this
        </Text>
    </Container>
}

export default App;