import {render} from "preact";
import App from "./popup/App.tsx";
import {MantineProvider} from "@mantine/core";

// creates react element and inserts into page
const app = document.createElement("div");
app.id = "extension-root"
document.body.append(app);
render(
    <MantineProvider withCssVariables getRootElement={() => document.getElementById("extension-root") ?? undefined}>
        <App/>
    </MantineProvider>, app);