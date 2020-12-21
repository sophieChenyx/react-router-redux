/**
 * 
 * @description 头部依赖组件
 * Header 组件 
*/
import React from "react";
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

// 规定了 传入参数的类型 接口interface 
interface useParamsProps {
  topicId: string
}

const Topic = () => {
  const { topicId } = useParams<useParamsProps>();
  return (
    <div>
      <h1>Topic{topicId}</h1>
    </div>
  )
}

// 设置嵌套路由 
function MatchRouteFunc() {
  const match = useRouteMatch();
  return (
    <div>
      <h2>嵌套子页面路由页面 &gt;&gt;&gt;&gt; </h2>

      {/* // 菜单导航 */}
      <ul>
        <li><Link to={`${match.url}/components`}> Components</Link></li>
        <li><Link to={`${match.url}/pannel`}> pannel</Link></li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        {/* 这里是 url 没有子路由的时候 */}
        <Route path={match.path}>选择一个 topic</Route>
      </Switch>
    </div>
  )
}

export default MatchRouteFunc;