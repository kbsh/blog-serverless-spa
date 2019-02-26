import {
  Card, CardActionArea, CardActions, CardHeader, Chip,
} from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { Link } from "react-router-dom";
import { DispatchProps } from ".";
import { RoutePathes } from "../../config/routes";
import { ArticlesApiResponse } from "../../types/api/articles";
import { ArticlesParams } from "../../types/articles";
import * as TextUtil from "../../utils/TextUtil";

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

type Props = ArticlesApiResponse & DispatchProps & WithStyles<Style>;

const Item = (props: Props) => {
  const { classes, id, title, tags, updatedAt, getArticles } = props;

  // 詳細画面へのパス
  const pathPost = TextUtil.getRoutePath(RoutePathes.Post, { key: "id", value: String(id) });

  /**
   * 指定した タグID でフィルターされた一覧ページへ遷移する
   * @param tagId タグID
   */
  const handleClickTag = (tagId: string) => {
    const params: ArticlesParams = {
      page: 1,
      tags: [tagId],
    };
    getArticles(params);
  };

  return (
    <Card className={classes.card}>
      <Link to={pathPost}>
        <CardActionArea>
          <CardHeader
            title={title}
            // componentいけそう
            subheader={updatedAt}
          />
        </CardActionArea>
      </Link>
      <CardActions className={classes.actions} disableActionSpacing>
        {/* タグ */}
        {tags.map((tag) => {
          return (
            <Chip key={tag.id} className={classes.chip} label={tag.name} onClick={() => handleClickTag(tag.id)} />
          );
        })}
      </CardActions>
    </Card>
  );
};

export default withStyles<Style>(style)(Item);
