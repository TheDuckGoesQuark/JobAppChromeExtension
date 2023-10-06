import {render} from "preact";
import App from "./popup/App.tsx";

// creates react element and inserts into page
const app = document.createElement("div");
app.id = "extension-root"
document.body.append(app);
render(<App/>, app);