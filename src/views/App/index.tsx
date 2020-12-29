// 项目 主页面
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteConfig from "@/router";
import Error from "@/common/components/Error";
import { IBaseProps } from "@/common/js/reactIInter";
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

// 菜单栏目 
const SiderBody = () => {
  return <>
    
  </>
}

// 顶部 bar


// content 
const AppWrapper = () => (
  <div>
    {/* AppWrapper 页面内部业务逻辑 */}
    <Router>
      <Switch>
        {RouteConfig.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact
              render={() => {
                return <item.component />
              }}
            />
          )
        })}
        <Route render={Error} />
      </Switch>
    </Router>
  </div>
)




// function Appss(props?: any) {
//   return (
//     <Router>
// <nav>
//   <ul>
//     <li><Link to="/">index</Link></li>
//     <li><Link to="/Topics">Topics</Link></li>
//     <li><Link to="/about">about</Link></li>
//   </ul>
// </nav>

//       <Switch>
//         <Route path="/Topics"><Arts /></Route>
//         <Route path="/about"><About /></Route>
//         <Route path="/"><Home /></Route>
//       </Switch>
//     </Router>
//   );
// }


// 页面布局
const App: React.FC<IBaseProps> = () => {



  return (
    <div>
      <Layout>
        <Header>
          头部内容 
        </Header>
        <Layout>
          <Content>
            <AppWrapper />
          </Content>
          <Sider width={200} >
            <SiderBody />
          </Sider>
        </Layout>
      </Layout>
    </div>
  )
}

export default App;
