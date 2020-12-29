// /**
//  * app 框架
//  * @author zhoumanting
//  */
// import React, { useState, memo, useMemo, Fragment, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { RouteComponentProps } from 'react-router';
// import Rooter from 'router';
// import { Layout, Menu, Dropdown, Badge, Modal } from 'antd';
// import { MenuUnfoldOutlined, MenuFoldOutlined, QuestionCircleTwoTone, BellTwoTone,
//     UserOutlined, LogoutOutlined, ShopOutlined, LoginOutlined } from '@ant-design/icons';
// import { IBaseProps } from '@common/js/reactExt';
// import logout  from '@services/logout';
// import { oldDomain, imgDomain, indexDomain } from '@services/domain';
// import { checkLink } from '@common/js/tool';
// import * as api from '@services/api';
// import MenuManager from './MenuManager';
// import logoUrl from './logo.svg';
// import * as styles from './index.scss';

// const Cookie = require('./../../common/js/cookie');

// const { getCommentUnread } = api.course;
// const { Header, Sider, Content } = Layout;
// const MenuItem = Menu.Item;

// interface IProps extends IBaseProps {
//     userInfo: {
//         asyncRouterMap: any[];
//         face: string;
//         username: string;
//         roleNames: string[];
//         role_id: string[];
//         isHasMenu: boolean;
//         isShowOldAdminJump: string;
//     };
// }
  
// const App: React.FC<IProps & RouteComponentProps> = (props) => {
//     const { history, userInfo } = props;
//     // 店铺选择
//     const isShopIndex = (history.location.pathname === '/shopIndex');
//     const { asyncRouterMap, username, face, isHasMenu, isShowOldAdminJump } = userInfo;
//     const [ collapsed, setCollapsed ] = useState<boolean>(false);
//     const [ count, setCount ] = useState<number>(0);

//     useEffect(() => {
//         if(asyncRouterMap.length > 0) { // 菜单数据回来再请求消息数据
//             getCommentUnread().then((response) => {
//                 const { unreadCommon, unreadQuestion } = response.data;
//                 const newCount = Number(unreadCommon) + Number(unreadQuestion);
//                 setCount(newCount);
//             });
//         }
//     }, []);

//     // 前往老后台
//     const goOldSystem = () => {
//         Modal.confirm({
//             title: '您确定要前往老版后台吗?',
//             icon: <QuestionCircleTwoTone twoToneColor="#02BEA0" />,
//             content: '',
//             onOk() {
//                 window.location.href = indexDomain;
//                 Cookie.remove('switchToken', { domain: '.xdf.cn', path: '/' });
//             }
//         });
//     };

//     // logo dom
//     const logoDom = (
//         <a className={styles.logoA}>
//             <img className={styles.logoImg} src={logoUrl} alt="" />
//             <h1 className={styles.logoH1}>{ collapsed ? '' : '小课堂'}</h1>
//         </a>
//     );

//     // 侧边栏
//     const siderBody = useMemo(() => {
//         return (
//             <Sider
//                 theme="light"
//                 className={styles.styleSider}
//                 collapsible
//                 collapsed={collapsed}
//                 onCollapse={(collapse) => { setCollapsed(collapse); }}
//             >
//                 <div className={collapsed ? `${styles.logo} ${styles.logoScale}` : `${styles.logo}`}>
//                     { logoDom }
//                 </div>
//                 <MenuManager routerMap={asyncRouterMap} />
//             </Sider>
//         );
//     }, [collapsed, asyncRouterMap]);

//     // 下拉菜单
//     const userMenu = (
//         <Menu>
//             <MenuItem onClick={() => logout() }><LogoutOutlined />退出</MenuItem>
//             { isHasMenu && <MenuItem onClick={() => history.push('/shopIndex') }><ShopOutlined />切换店铺</MenuItem> }
//         </Menu>
//     );
//     const msgMenu = (
//         <Menu>
//             <MenuItem>
//                 <a onClick={() => history.push('/studentcomment/index') }>学员评论</a>
//             </MenuItem>
//         </Menu>
//     );
//     // header
//     const headerBody = useMemo(() => {
//         return (
//             <Header className={styles.styleHeader}>
//                 {
//                     (isHasMenu && !isShopIndex) ? React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: styles.trigger,
//                         onClick: () => { setCollapsed(!collapsed);},
//                     }) : (
//                         <div className={`${styles.logo} ${styles.logoNoMenu}`}>
//                             { logoDom }
//                         </div>
//                     )
//                 }
//                 <div className={styles.headerRight}>
//                     {
//                         (isHasMenu && !isShopIndex) ? (
//                             <Fragment>
//                                 {
//                                     isShowOldAdminJump == '1' && (
//                                         <div className={styles.dropdownStyle} onClick={goOldSystem}>
//                                             <a className={styles.headerRightA}>
//                                                 <LoginOutlined twoToneColor="#02BEA0" className={styles.headerRightImg} />
//                                                 前往老版后台
//                                             </a>
//                                         </div>
//                                     )
//                                 }
                                
//                                 <div className={styles.dropdownStyle}>
//                                     <a className={styles.headerRightA} target="_blank" href={`${oldDomain}admin/help/index.html`}>
//                                         <QuestionCircleTwoTone twoToneColor="#02BEA0" className={styles.headerRightImg} />
//                                         帮助中心
//                                     </a>
//                                 </div>
//                                 <Badge count={count} overflowCount={10} className={styles.antBadgeCount}>
//                                     <Dropdown overlay={msgMenu} placement="bottomCenter" className={styles.dropdownStyle}>
//                                         <a className={styles.headerRightA}>
//                                             <BellTwoTone twoToneColor="#02BEA0" className={styles.headerRightImg} />
//                                             消息
//                                         </a>
//                                     </Dropdown>
//                                 </Badge>
//                             </Fragment>
//                         ) : null
//                     }
//                     <Dropdown overlay={userMenu} placement="bottomCenter" className={styles.dropdownStyle}>
//                         <a className={styles.headerRightA}>
//                             {
//                                 face ? (
//                                     <img src={checkLink(face) ? face :`${imgDomain}${face}`} className={styles.headerRightImg} />
//                                 ) : <UserOutlined className={styles.headerRightImg} />
//                             }
//                             { username }
//                         </a>
//                     </Dropdown>
//                 </div>
//             </Header>
//         );
//     }, [collapsed, username, count, isShopIndex]);

//     return (
//         <div className={styles.appContainer}>
//             <Layout className={styles.styleLayout}>
//                 { !isShopIndex ? siderBody : null }
//                 <Layout>
//                     {  headerBody }
//                     <Content className={styles.appContent}>
//                         <Rooter history={history} />
//                     </Content>
//                 </Layout>
//             </Layout>
//         </div>
//     );
// };
// function update(state) {
//     return {
//         userInfo: state.userInfo,
//     };
// }

export default "sasdasd";

