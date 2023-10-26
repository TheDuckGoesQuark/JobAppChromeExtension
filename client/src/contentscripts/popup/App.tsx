import useFocusedInputElement, {InputElement} from "./hooks/useFocusedInputElement.ts";
import {useState} from "preact/hooks";
import {useEffect} from "preact/compat";
import {Container, ContainerProps, MantineProvider, Text} from "@mantine/core";


const useContainerProps = (focusedElement: InputElement | undefined): ContainerProps => {
    const rect = focusedElement?.getBoundingClientRect()

    return {
        style: {
            position: "absolute",
            top: (rect?.top ?? 0) - (rect?.height ?? 0),
            left: rect?.left,
            zIndex: 999,
        },
    }
}

const App = () => {
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

    if (!(focusedElement && showPopup)) return null;
    else return <MantineProvider>
        <Container {...containerProps} ref={ref}>
            <Text>hello! Click <a onClick={() => setShowPopup(false)}>here</a> to close this
            </Text>
        </Container>
    </MantineProvider>
}

export default App;