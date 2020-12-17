/**
 *
 *  @description loadable 组件封装
 *
*/
import Loading from "../Loading";
import Loadable from 'react-loadable';

export default function NewLoadable(option: any) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 300,   // 请求时间超过 300 ms 就会渲染 loading
  }, option))
}

