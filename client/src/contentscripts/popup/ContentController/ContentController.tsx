import {FC} from "preact/compat";
import {useState} from "preact/hooks";

export interface AnswerProviderProps {
    question: string
    onGoBack: () => void
}

export interface QuestionProviderProps {
    onQuestionChosen: (question: string) => void
}

interface ContentControllerProps {
    AnswerProviderComponent: FC<AnswerProviderProps>
    QuestionProviderComponent: FC<QuestionProviderProps>
}

const ContentController: FC<ContentControllerProps> = ({QuestionProviderComponent, AnswerProviderComponent}) => {
    const [question, setQuestion] = useState<string>();

    const onGoBack = () => {
        setQuestion(undefined)
    }

    const onSetQuestion = (question: string) => {
        setQuestion(question)
    }

    if (!question) {
        return <QuestionProviderComponent onQuestionChosen={onSetQuestion} />
    } else {
        return <AnswerProviderComponent question={question} onGoBack={onGoBack} />
    }
}

export default ContentController;