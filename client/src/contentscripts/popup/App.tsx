import useFocusedInputElement, {InputElement} from "./hooks/useFocusedInputElement.ts";
import {useState} from "preact/hooks";
import {FC, useEffect} from "preact/compat";
import {ActionIcon, CloseIcon, Container, ContainerProps, Divider, Group, Text} from "@mantine/core";
import '@mantine/core/styles.css';
import ContentController from "./ContentController";
import AnswerProvider from "./AnswerProvider";
import QuestionProvider from "./QuestionProvider";


const useContainerProps = (focusedElement: InputElement | undefined): ContainerProps => {
    const rect = focusedElement?.getBoundingClientRect()

    return {
        fluid: true,
        pos: "absolute",
        left: rect?.left,
        top: (rect?.bottom ?? 0) + 25,
        bg: "blue.8",
        style: {zIndex: 999},
    }
}

const App: FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {element: focusedElement, ref} = useFocusedInputElement();
    const containerProps = useContainerProps(focusedElement)

    useEffect(() => {
        setShowPopup(true);
    }, [focusedElement])

    if (!(focusedElement && showPopup)) return <></>;
    else return <Container {...containerProps} ref={ref}>
        <Group noWrap>
            <Text style={{flexGrow: 1}}>Job Application Autofill</Text>
            <ActionIcon onClick={() => setShowPopup(false)}>
                <CloseIcon/>
            </ActionIcon>
        </Group>
        <Divider/>
        <ContentController
            AnswerProviderComponent={AnswerProvider}
            QuestionProviderComponent={QuestionProvider(focusedElement)}
        />
    </Container>
}

export default App;