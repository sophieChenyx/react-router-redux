// 项目 主页面
// import './index.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";


const Index = () => (<h1>首页</h1>);
// const Home = () => (<h1>HOME</h1>);
const About = () => (<h1>ABOUT</h1>);



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

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">index</Link></li>
          <li><Link to="/Topics">Topics</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Topics"><MatchRouteFunc /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/"><Index /></Route>
      </Switch>

    </Router>
  );
}

export default App;
  