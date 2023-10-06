import {MessageTypeHandler} from "../messageHandlerRegistry.ts";
import {FocusEventMessage, MessageType, QuestionAnsweredMessage} from "../../../shared/messages.ts";
import {getAuthToken, getQueryAnswer} from "../services.ts";

const onFocusHandler: MessageTypeHandler = async (message) => {
    const onFocusMessage = message as FocusEventMessage
    const authToken = await getAuthToken();

    const inputElement = (onFocusMessage.inputElement as HTMLInputElement)
    const labels = inputElement.labels
    const labelText = labels?.[0].textContent
    const question = labelText ?? "What are your strengths?"
    const answer = await getQueryAnswer(question, authToken.token ?? "")

    const response: QuestionAnsweredMessage = {
        type: MessageType.questionAnswered,
        question,
        answer: answer.answer
    }

    return response;
}

export default onFocusHandler