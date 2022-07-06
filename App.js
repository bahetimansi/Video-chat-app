import React from "react";
import { Typography, AppBar } from "@material-ui/core";


import VideoPlayer from "./Video-chat-app/client/src/components/VideoPlayer";
import Notifications from "./Video-chat-app/client/src/components/Notifications";
import Options from "./Video-chat-app/client/src/components/Options";
const App = ()  => {
    return(
        <div>
            < AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            < VideoPlayer />
            <Options>
                <Notifications />
                </Options> 
        </div>
    );
}

export default App;