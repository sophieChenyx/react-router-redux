/**
 * 
 * @description 主页 布局页面
 * @date 2020-12-31 新年快乐
*/
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { RouteConfig, AppWrapper } from "@/router";
import { IBaseProps } from "@/common/js/reactIInter";
import styles from './index.module.less';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuListItem from '@/common/components/MenuListItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// 页面布局
const App: React.FC<IBaseProps & RouteComponentProps> = (props) => {
  return (
    <div className={styles.index}>
      {/* // 头部样式 */}
      {/*  20210112需求说明 这里做配置  */}
      {/* 如果 切换到 另外一个身份 dispatch 全局身份  */}
      {/* 并且改变菜单栏目 权限 */}
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
                  return <MenuListItem route={item} />;
                }
                return (
                  <ListItem button component={Link} to={item.path}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
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
