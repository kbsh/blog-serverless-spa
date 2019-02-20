import List from "../components/List";
import Post from "../components/Post";

interface RouteStyle {
  path: string;
  component: React.ComponentType;
}

/**
 * ルーティングパス、コンポーネントのマッパー
 */
const Routes: RouteStyle[] = [
  {
    path: "/",
    component: List,
  },
  {
    path: "/post/:id",
    component: Post,
  },
];

export default Routes;
