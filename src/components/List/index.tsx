import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { connect } from "react-redux";
import { lifecycle } from "recompose";
import { getArticles } from "../../actions";
import { RootState } from "../../types";
import { ArticlesState } from "../../types/articles";
import Item from "./Item";

type Style = "root";
const style: StyleRulesCallback<Style> = () => ({
  root: {
    marginTop: 99,
  },
});

type StateProps = ArticlesState;
export type DispatchProps = typeof mapDispatchToProps;
type OuterProps = {};
type Props = StateProps & DispatchProps & OuterProps & WithStyles<Style>;

const List = lifecycle<Props, {}>({
  componentDidMount() {
    const { page, tags } = this.props;
    // TODO カテゴリ、人気記事、新着記事をAPI取得するか

    this.props.getArticles({
      page,
      tags,
    });
  },
})((props: Props) => {
  const { articles, classes } = props;

  return (
    <div className={classes.root}>
      {articles.map((article) => {
        return (
          <Item key={article.id}　{...article} getArticles={props.getArticles} />
        );
      })}
    </div>
  );
});

// const mapDispatchToProps = (
//   dispatch: Dispatch<RootActions>,
//   _ownProps: OuterProps,
// ): DispatchProps => ({
//   increment: () => {
//     dispatch(actionCreator.counter.increment({ value: 1 }));
//   },
//   decrement: () => {
//     dispatch(actionCreator.counter.decrement({ value: 1 }));
//   },
// });

const mapStateToProps = (
  state: RootState,
  _ownProps: OuterProps,
): StateProps => ({
  ...state.articles,
});

const mapDispatchToProps = {
  getArticles,
};

export default connect<StateProps, DispatchProps, OuterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles<Style>(style)(List));
