import List from "../components/List";
import Post from "../components/Post";

/**
 * ルーティングパス
 */
export enum RoutePathes {
  Home = "/",
  Post = "/post/:id",
}

interface RouteStyle {
  path: string;
  component: React.ComponentType;
}

/**
 * ルーティングパス、コンポーネントのマッパー
 */
const Routes: RouteStyle[] = [
  {
    path: RoutePathes.Home,
    component: List,
  },
  {
    path: RoutePathes.Post,
    component: Post,
  },
];

export default Routes;
