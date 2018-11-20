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

const List = lifecycle({
  componentDidMount() {
    // TODO カテゴリ、人気記事、新着記事をAPI取得するか
    console.log("footer");
  },
})((props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      記事一覧だす
    </div>
  );
});

export default withStyles(styles)(List);
