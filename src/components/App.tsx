import React from "react";
import { lifecycle } from "recompose";

const App = lifecycle({
    componentDidMount() {
        console.log("mounted");
    },
})(() => {
    return (
        <div>aaa</div>
    );
});

export default App;
