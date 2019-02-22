import { Chip } from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { connect } from "react-redux";
import { lifecycle } from "recompose";
import { getArticle } from "../../actions";
import { RootState } from "../../types";
import { Tag } from "../../types/api/articles";
import { ArticleState } from "../../types/article";

type Style = "root" | "chip";
const style: StyleRulesCallback<Style> = ({ spacing }) => ({
  root: {
    marginTop: 99,
  },
  chip: {
    margin: "auto " + spacing.unit + "px",
  },
});

type StateProps = ArticleState;
export type DispatchProps = typeof mapDispatchToProps;
type OuterProps = {};
type Props = StateProps & DispatchProps & OuterProps & WithStyles<Style>;

const Post = lifecycle<Props, {}>({
  componentDidMount() {
    const { id } = this.props;

    this.props.getArticle({
      id,
    });
  },
})((props: Props) => {
  const { classes, id, title, body, tags, updatedAt } = props;

  return (
    <div className={classes.root}>
      id: {id}
      title: {title}
      body: {body}
      {tags.map((tag: Tag) => {
        return (
          <Chip key={tag.id} className={classes.chip} label={tag.name} />
        );
      })}
      updatedAt: {updatedAt}
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
  ...state.article,
});

const mapDispatchToProps = {
  getArticle,
};

export default connect<StateProps, DispatchProps, OuterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles<Style>(style)(Post));
