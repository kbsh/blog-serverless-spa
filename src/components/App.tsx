import React from "react";
import { lifecycle } from "recompose";
import Footer from "./Footer";
import Header from "./Header";

const App = lifecycle({
  componentDidMount() {
    console.log("mounted");
  },
})(() => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
});

export default App;
