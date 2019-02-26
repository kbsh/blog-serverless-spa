import { StyleRulesCallback, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { lifecycle } from "recompose";
import Footer from "./Footer";
import Header from "./Header";
import Router from "./Router";

type Style = "body";
const style: StyleRulesCallback<Style> = () => ({
  body: {
    padding: "0 25%",
    marginTop: 100,
  },
});

const App = lifecycle({
  componentDidMount() {
    console.log("mounted");
  },
})((props: WithStyles<Style>) => {
  const { classes } = props;

  return (
    <>
      <Header />
      <div className={classes.body} >
        <Router />
      </div>
      <Footer />
    </>
  );
});

export default withStyles<Style>(style)(App);
