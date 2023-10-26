import {AnswerProviderProps} from "../ContentController/ContentController.tsx";
import {FC, useEffect} from "preact/compat";
import {useState} from "preact/hooks";
import {sendMessageToBackgroundScript} from "../../../shared/runtime.ts";
import {MessageType} from "../../../shared/messages.ts";
import {ActionIcon, CopyButton, Group, LoadingOverlay, rem, Text} from "@mantine/core";
import {IconCheck, IconCopy} from "@tabler/icons-react";

const AnswerProvider: FC<AnswerProviderProps> = ({question}) => {
    const [answer, setAnswer] = useState<string>();

    useEffect(() => {
        let cancel = false;

        const sendRequest = async () => {
            const res = await sendMessageToBackgroundScript({type: MessageType.askQuestion, question})
            if (res?.type !== MessageType.questionAnswered) {
                return;
            }

            if (cancel) return;

            setAnswer(res?.answer)
        }

        sendRequest();

        return () => {
            cancel = true;
        }
    }, [question])

    return <Group noWrap>
        <LoadingOverlay visible={!answer}/>
        <Text>Answer: {answer}</Text>
        <CopyButton value={answer ?? ""} timeout={2000}>
            {({copied, copy}) => (
                <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                    {copied ? (
                        <IconCheck style={{width: rem(16)}}/>
                    ) : (
                        <IconCopy style={{width: rem(16)}}/>
                    )}
                </ActionIcon>
            )}
        </CopyButton>
    </Group>
}

export default AnswerProvider;