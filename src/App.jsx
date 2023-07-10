import { Route, BrowserRouter, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { cometChatLogin, cometChatLogout } from "./CometChat.jsx";
import {
  CometChatConversationsWithMessages,
  CometChatUsersWithMessages,
} from "@cometchat/chat-uikit-react";

const App = () => {
  const [uid, setUid] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (!user && uid) cometChatLogin(uid, setUser);
  }, [user, uid]);

  return (
    <BrowserRouter>
      <Route exact path="/">
        {!user ? (
          <>
            Login as:
            <br />
            <a
              onClick={() => {
                setUid("asdfasdf");
              }}
            >
              User 1
            </a>
            <br />
            <a
              onClick={() => {
                setUid("abc123");
              }}
            >
              User 2
            </a>
          </>
        ) : (
          <>
            <a
              onClick={() => {
                cometChatLogout(setUser, setUid);
              }}
            >
              Logout
            </a>
            <br />
            <br />
            <br />
            <br />
            <CometChatUsersWithMessages />
          </>
        )}
      </Route>
    </BrowserRouter>
  );
};

export default App;
