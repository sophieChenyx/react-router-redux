
/**
 * 基础interface
 * @export
 * @interface IBaseProps
 */
export interface IBaseProps {
  history?: any;
  dispatch?: any;
  match?: any;
  route?: any;
  // children?: React.ReactNode;
}


/**
 * 基础路由数据定义 
 * @export
 * @interface IRouterProps
 */
export interface IRouterProps {
  path: string;
  label: string;
  text: string;
  icon: React.ReactNode;
  component?: any;
  children?: object[] | any;
  // children?: React.ReactNode;
}
