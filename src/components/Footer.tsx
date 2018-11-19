import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";
import { lifecycle } from "recompose";

const styles: StyleRulesCallback = () => ({
  root: {
    marginTop: 100,
    background: "dimgrey",
    color: "white",
  },
});

interface Props {
  classes: ClassNameMap;
}

const Footer = lifecycle({
  componentDidMount() {
    // TODO カテゴリ、人気記事、新着記事をAPI取得するか
    console.log("footer");
  },
})((props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      © 2015 shohei kitabatake
    </div>
  );
});

export default withStyles(styles)(Footer);
