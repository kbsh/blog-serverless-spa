import { AppBar, IconButton, InputBase, Toolbar, Typography, WithStyles } from "@material-ui/core";
import { StyleRulesCallback, withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { lifecycle } from "recompose";

type Style = "root" | "grow" | "menuButton" | "title" | "search" | "searchIcon" | "inputRoot" | "inputInput";
const style: StyleRulesCallback<Style> = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    "position": "relative",
    "borderRadius": theme.shape.borderRadius,
    "backgroundColor": fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    "marginLeft": 0,
    "width": "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "width": 120,
      "&:focus": {
        width: 200,
      },
    },
  },
});

type Props = WithStyles<Style>;

const Header = lifecycle({
  componentDidMount() {
    // TODO カテゴリAPI取得するか
    // TODO メニューstate管理するか
  },
})((props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {/* ドロップメニュー */}
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>

          {/* タイトル */}
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            WEAL | Web Engineer Action Log
          </Typography>

          {/* 検索 */}
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default withStyles<Style>(style)(Header);
