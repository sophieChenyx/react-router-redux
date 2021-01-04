/**
 * 
 * @description 主页 布局页面
 * @date 2020-12-31 新年快乐
*/
import React, { useState } from "react";
import { Switch, Route, withRouter, RouteComponentProps, Link } from "react-router-dom";
import RouteConfig from "@/router";
import Error from "@/common/components/Error";
import { IBaseProps, IRouterProps } from "@/common/js/reactIInter";
import styles from './index.module.less';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function renderRoutes(RouteConfigs: any) {
  return RouteConfigs.map((item: IRouterProps) => {
    if (item.children && item.children.length) {
      return renderRoutes(item.children)
    } else {
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
    }
  })
}

function AppWrapper() {
  return (
    <div>
      <Switch>
        {renderRoutes(RouteConfig)}
        <Route render={Error} />
      </Switch>
    </div>
  )
}

// 页面布局
const App: React.FC<IBaseProps & RouteComponentProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  // const [open, setOpen] = useState<string>('menu');
  // const prevOpen = usePrevious(open);
  // const handleClickList = (label: string) => {
  //   // console.log('>>>>>>>>>>> ', open, prevOpen, label)
  //   setOpen(`menu_${label}`)
  //   // open === prevOpen ? setOpen(`menu_${label}`) : setOpen('menu');
  // }
  return (
    <div className={styles.index}>
      {/* // 头部样式 */}
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography color="inherit">
              更多内容可前往站点
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.index_inner}>
        {/* 中间内容 */}
        <div className={styles.index_content}>
          <Paper>
            <AppWrapper />
          </Paper>
        </div>

        {/* 右侧内容 菜单导航 */}
        {/* 如果是 手机端 页面内容 在导航处 展开  单个的 */}
        <div className={styles.index_slider}>
          <List>
            {
              RouteConfig.map(item => {
                if (item.children && item.children.length !== 0) {
                  return <>
                    <ListItem button onClick={() => { setOpen(!open) }}>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                      {/* {open === `menu_${item.label}` ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
                      {!!open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Divider />
                      <List component="div" disablePadding>
                        {
                          item.children.map(item => {
                            return (<ListItem key={item.path} button component={Link} to={item.path}>
                              <ListItemText primary={<Button>{item.text}</Button>} />
                            </ListItem>)
                          })
                        }
                      </List>
                    </Collapse>
                  </>
                }

                // 嵌套路由
                return (
                  <ListItem button component={Link} to={item.path}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                  // <CardActions>
                  // <Button onClick={() => history.push(`${item.path}`)}></Button>
                  // </CardActions>
                )
              })
            }
          </List>
        </div>
      </div>
    </div>
  )
}

export default withRouter(App);
