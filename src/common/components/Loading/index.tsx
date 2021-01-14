/**
 * Loading Page
 * @author: chenyongxin
 * 通用 加载 组件 
 */

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
// const Loading = <div style={{ width: '100%', height: '100%' }}><Backdrop open={true}><CircularProgress color="inherit" /></Backdrop></div>;
const Loading = () => <div style={{ width: '100%', height: '100%' }}><CircularProgress color="inherit" /></div>;
export default Loading;
