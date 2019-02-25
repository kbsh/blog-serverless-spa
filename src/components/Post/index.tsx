import { Chip } from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { connect } from "react-redux";
import { match } from "react-router-dom";
import { lifecycle } from "recompose";
import { getArticle } from "../../actions";
import { RootState } from "../../types";
import { Tag } from "../../types/api/articles";
import { ArticleParams, ArticleState } from "../../types/article";

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
type OuterProps = {
  match?: match<ArticleParams>;
};
type Props = StateProps & DispatchProps & OuterProps & WithStyles<Style>;

const Post = lifecycle<Props, {}>({
  componentDidMount() {
    if (this.props.match === undefined) {
      return null;
    }

    this.props.getArticle({
      id: this.props.match.params.id,
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
