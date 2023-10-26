import {MessageTypeHandler} from "../messageHandlerRegistry.ts";
import {AskQuestionMessage, MessageType, QuestionAnsweredMessage} from "../../../shared/messages.ts";
import {getAuthToken, getQueryAnswer} from "../services.ts";

const onQuestionAskedHandler: MessageTypeHandler = async (message) => {
    const questionAskedMessaged = message as AskQuestionMessage
    const authToken = await getAuthToken();

    const answer = await getQueryAnswer(questionAskedMessaged.question, authToken.token ?? "")

    const response: QuestionAnsweredMessage = {
        type: MessageType.questionAnswered,
        question: questionAskedMessaged.question,
        answer: answer.answer
    }

    return response;
}

export default onQuestionAskedHandler;