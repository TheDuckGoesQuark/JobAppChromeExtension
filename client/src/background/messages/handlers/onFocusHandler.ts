import {MessageTypeHandler} from "../messageHandlerRegistry.ts";
import {FocusEventMessage, MessageType, QuestionAnsweredMessage} from "../../../shared/messages.ts";
import {getAuthToken, getQueryAnswer} from "../services.ts";
import {CLIENT_ID} from "../../../shared/consts.ts";

const onFocusHandler: MessageTypeHandler = async (message) => {
    const onFocusMessage = message as FocusEventMessage
    const authToken = await getAuthToken();
    const question = onFocusMessage.inputElement.textContent || "n/a";

    const answer = await getQueryAnswer(question, authToken.token ?? "", CLIENT_ID)

    const response: QuestionAnsweredMessage = {
        type: MessageType.questionAnswered,
        question: onFocusMessage.inputElement.textContent ?? "n/a",
        answer: answer.answer
    }

    return response;
}

export default onFocusHandler