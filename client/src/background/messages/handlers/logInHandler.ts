import {MessageTypeHandler} from "../messageHandlerRegistry.ts";

const logInHandler: MessageTypeHandler = async (message, sender) => {
    console.log({message, sender})
}

export default logInHandler