/**
 * Loading Page
 * @author: chenyongxin
 * @date 2021-01-04 新年快乐
 * @description 空内容组件
 */

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function NoContent() {
  return <Paper>
    当前没有内容
    <CheckBoxOutlineBlankIcon />
  </Paper>
}

export default NoContent;

