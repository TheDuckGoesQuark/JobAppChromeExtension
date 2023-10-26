import {render} from "preact";
import App from "./popup/App.tsx";
import {MantineProvider} from "@mantine/core";
import {APP_ID} from "./Consts.ts";

// creates react element and inserts into page
const app = document.createElement("div");
app.id = APP_ID;
document.body.append(app);
render(
    <MantineProvider withCssVariables getRootElement={() => document.getElementById("extension-root") ?? undefined}>
        <App/>
    </MantineProvider>, app
);