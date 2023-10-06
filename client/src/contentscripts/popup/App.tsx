import useFocusedInputElement from "./hooks/useFocusedInputElement.ts";

const App = () => {
    const focusedElement = useFocusedInputElement();
    // TODO render "submit question", fire the below to populate the field
    // const res = await sendMessageToBackgroundScript({type: MessageType.focusEvent, inputElement: activeElement})
    // if (res?.type !== MessageType.questionAnswered) {
    //     return;
    // }
    //
    // // @ts-ignore
    // activeElement.value = res.answer

    return focusedElement ? <div>hello!</div> : null
}

export default App;