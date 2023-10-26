import {QuestionProviderProps as IQuestionProvider} from "../ContentController/ContentController.tsx";
import {ChangeEvent, FC} from "preact/compat";
import {InputElement} from "../hooks/useFocusedInputElement.ts";
import {Button, Group, Select, Stack, TextInput} from "@mantine/core";
import {useState} from "preact/hooks";

interface QuestionProviderProps extends IQuestionProvider {
    focusedElement: InputElement
}


const labelNodesToQuestions = (labels: NodeListOf<HTMLLabelElement> | null): string[] => {
    const questions: string[] = []
    labels?.forEach(label => label.textContent && questions.push(label.textContent));
    return questions;
}
const QuestionProvider: FC<QuestionProviderProps> = ({focusedElement, onQuestionChosen}) => {
    const [value, setValue] = useState<string | null>();
    const labels = labelNodesToQuestions(focusedElement.labels);
    const [manualInput, setUseManualInput] = useState(labels.length === 0);

    const onSubmit = () => {
        if (value) {
            onQuestionChosen(value);
        }
    }

    return <Stack>
        {!manualInput && labels.length > 0 ?
            <Select data={labels} value={value} onChange={setValue}/>
            : <TextInput value={value}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}/>
        }
        <Group>
            {labels.length > 0 && <Button onClick={() => setUseManualInput(prev => !prev)}>
                {!manualInput ? "Manually enter" : "Choose"} question prompt
            </Button>}
            <Button onClick={onSubmit} disabled={!value}>
                Submit
            </Button>
        </Group>
    </Stack>
}

const QuestionProviderConstructor = (focusedElement: InputElement): FC<IQuestionProvider> => {
    return ({onQuestionChosen}) => <QuestionProvider focusedElement={focusedElement}
                                                     onQuestionChosen={onQuestionChosen}/>
}

export default QuestionProviderConstructor;
