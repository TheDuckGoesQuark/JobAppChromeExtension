import {useState} from 'preact/hooks'
import preactLogo from '../assets/preact.svg'
import viteLogo from '/vite.svg'
import {Button, Code, Container, Group, MantineProvider, Stack, Text, Title} from "@mantine/core";
import {FC} from "preact/compat";

interface AppProps {
    title?: string
}

export const App: FC<AppProps> = ({title}) => {
    const [count, setCount] = useState(0)

    return (
        <MantineProvider>
            <Container fluid>
                <Group justify="center" noWrap>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} alt="Vite logo"/>
                    </a>
                    <a href="https://preactjs.com" target="_blank">
                        <img src={preactLogo} alt="Preact logo"/>
                    </a>
                </Group>
                <Title>{title ?? "-"}</Title>
                <Stack align="center">
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </Button>
                    <Text>
                        Edit <code>src/app.tsx</code> and save to test HMR
                    </Text>
                </Stack>
                <Code>
                    Click on the Vite and Preact logos to learn more
                </Code>
            </Container>
        </MantineProvider>
    )
}
