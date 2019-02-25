import {
  Card, CardActionArea, CardActions, CardHeader, Chip,
} from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import React from "react";
import { DispatchProps } from ".";
import { ArticlesApiResponse } from "../../types/api/articles";
import { ArticleParams } from "../../types/article";
import { ArticlesParams } from "../../types/articles";

type Style = "card" | "cardActionArea" | "actions" | "chip";
const style: StyleRulesCallback<Style> = ({ spacing, palette }) => ({
  card: {
    margin: spacing.unit * 4 + "px auto",
  },
  cardActionArea: {
    "&:hover": {
      backgroundColor: fade(palette.common.black, 0.1),
    },
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
  const { classes, id, title, tags, updatedAt, getArticle, getArticles } = props;

  /**
   * 個別記事ページへ遷移する
   */
  const handleClickItem = () => {
    const params: ArticleParams = {
      id,
    };
    getArticle(params);
  };

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
      <CardActionArea className={classes.cardActionArea} onClick={handleClickItem}>
        <CardHeader
          title={title}
          // componentいけそう
          subheader={updatedAt}
        />
      </CardActionArea>
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
