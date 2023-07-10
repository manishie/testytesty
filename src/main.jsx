import { createRoot } from "react-dom/client";
import { CometChat } from "@cometchat-pro/chat";
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import React from "react"
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App />
);
