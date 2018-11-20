import List from "../components/List";

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
];

export default Routes;
