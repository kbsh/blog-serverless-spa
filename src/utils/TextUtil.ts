import { RoutePathes } from "../config/routes";

type PathParam = {
  key: string,
  value: string,
};
/**
 * RoutePathes からパスパラメータを置換して作成したパス返却
 * @param path ルーティングパス
 * @param args 「:xxx」を置換する文字列
 * @return string パスパラメータを付与したパス
 */
export function getRoutePath(path: RoutePathes, ...args: PathParam[]): string {
  let result: string = path;
  args.forEach((arg: PathParam) => {
    result = result.replace(`:${arg.key}`, arg.value);
  });

  return result;
}
