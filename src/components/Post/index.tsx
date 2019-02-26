import { Card, CardContent, CardHeader, Chip, Typography } from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { connect } from "react-redux";
import { Link, match } from "react-router-dom";
import { lifecycle } from "recompose";
import { getArticle } from "../../actions";
import { RoutePathes } from "../../config/routes";
import { RootState } from "../../types";
import { Tag } from "../../types/api/articles";
import { ArticleParams, ArticleState } from "../../types/article";

type Style = "card" | "actions" | "chip";
const style: StyleRulesCallback<Style> = ({ spacing }) => ({
  card: {
    margin: spacing.unit * 4 + "px auto",
  },
  actions: {
    display: "flex",
    margin: spacing.unit * 2 + "px 0",
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
  const { classes, title, body, tags, updatedAt } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={updatedAt}
      />
      {/* タグ */}
      {tags.map((tag: Tag) => {
        return (
          <Link key={tag.id} to={RoutePathes.Home}>
            <Chip key={tag.id} className={classes.chip} label={tag.name} />
          </Link>
        );
      })}
      <CardContent>
        <Typography paragraph>{body}</Typography>
      </CardContent>
    </Card>
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
