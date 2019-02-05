import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { lifecycle } from "recompose";

type Style = "root";
const style: StyleRulesCallback<Style> = () => ({
  root: {
    marginTop: 100,
  },
});

type Props = WithStyles<Style>;

const Footer = lifecycle({
  componentDidMount() {
    // TODO カテゴリ、人気記事、新着記事をAPI取得するか
    console.log("footer");
  },
})((props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      © shohei kitabatake
    </div>
  );
});

export default withStyles<Style>(style)(Footer);
