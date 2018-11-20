import React from "react";
import { lifecycle } from "recompose";
import Footer from "./Footer";
import Header from "./Header";
import Router from "./Router";

const App = lifecycle({
  componentDidMount() {
    console.log("mounted");
  },
})(() => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
});

export default App;
