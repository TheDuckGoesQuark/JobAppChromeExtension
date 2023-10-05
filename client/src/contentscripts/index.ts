import focusInputHandler from "./focusInputHandler.tsx";

// for focus, we fire during the capture phase as focus doesn't bubble
document.addEventListener('focus', focusInputHandler, true)
