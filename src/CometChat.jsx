import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";

const COMETCHAT_CONSTANTS = {
  APP_ID: "231543ef38cb67f6",
  REGION: "us",
  AUTH_KEY: "541be3fe31ec278e963867e480675de6d6f3fb04", //temporary
};

export const cometChatLogin = (uid, setUser) => {
  const UIKitSettings = new UIKitSettingsBuilder()
    .setAppId(COMETCHAT_CONSTANTS.APP_ID)
    .setRegion(COMETCHAT_CONSTANTS.REGION)
    .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
    .subscribePresenceForFriends()
    .build();

  //Initialize CometChat UIKit
  CometChatUIKit.init(UIKitSettings)
    .then(() => {
      console.log("Initialization completed successfully");

      CometChatUIKit.getLoggedinUser().then((user) => {
        if (!user) {
          //Login user
          CometChatUIKit.login(uid, COMETCHAT_CONSTANTS.AUTH_KEY)
            .then((user) => {
              console.log("Login Successful:", { user });
              setUser(user);
              //mount your app
            })
            .catch(console.log);
        } else {
          console.log("Already logged in:", { user });
          setUser(user);
        }
      });
    })
    .catch(console.log);
};

export const cometChatLogout = (setUser, setUid) => {
  CometChatUIKit.logout();
  setUser(null);
  setUid(null);
};
