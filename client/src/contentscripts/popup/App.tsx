import useFocusedInputElement, {InputElement} from "./hooks/useFocusedInputElement.ts";
import {useState} from "preact/hooks";
import {useEffect} from "preact/compat";
import {Container, ContainerProps, MantineProvider, Text} from "@mantine/core";


const useContainerProps = (focusedElement: InputElement | undefined): ContainerProps => {
    const rect = focusedElement?.getBoundingClientRect()
    console.log({rect})
    return {
        style: {
            position: "absolute",
            bottom: rect?.top,
            left: rect?.left,
        },
        w: "20rem",
        h: "50rem",
    }
}

const App = () => {
    const [showPopup, setShowPopup] = useState(false);
    const focusedElement = useFocusedInputElement();
    const containerProps = useContainerProps(focusedElement)

    console.log({focusedElement})

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
        <Container {...containerProps}>
            <Text>hello! Click <a onClick={() => setShowPopup(false)}>here</a> to close this
            </Text>
        </Container>
    </MantineProvider>
}

export default App;