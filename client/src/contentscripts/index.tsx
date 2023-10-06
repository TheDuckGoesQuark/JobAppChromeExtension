import focusInputHandler from "./focusInputHandler.tsx";
import {render} from "preact";
import App from "./popup/App.tsx";

// for focus, we fire during the capture phase as focus doesn't bubble
document.addEventListener('focus', focusInputHandler, true)

// creates react element
const app = document.createElement("div");
app.id = "extension-root"

document.body.append(app);
render(<App/>, app);