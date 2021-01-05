/***
 * 
 * @description 多阶子菜单栏目
 * @date 2021-01-05 
 * 
*/
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { IRouterProps } from "@/common/js/reactIInter";
import ListItemText from '@material-ui/core/ListItemText';


interface IListProps {
  route: IRouterProps;
}

const MenuListItem: React.FunctionComponent<IListProps> = ({
  route
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <ListItem button onClick={() => { setOpen(!open) }}>
        <ListItemIcon>
          {route.icon}
        </ListItemIcon>
        <ListItemText primary={route.text} />
        {!!open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          {
            route.children.map((item: IRouterProps) => {
              return (<ListItem key={item.path} button component={Link} to={item.path}>
                <ListItemText primary={<Button>{item.text}</Button>} />
              </ListItem>)
            })
          }
        </List>
      </Collapse>
    </>
  )
}

export default MenuListItem;
