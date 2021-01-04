/**
 * 
 * @description 路由配置文件
 * @date 2020-12-25 🎄圣诞快乐
*/
import NewLoadable from '@/common/components/NewLoadable';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MoodIcon from '@material-ui/icons/Mood';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreIcon from '@material-ui/icons/More';
import MessageIcon from '@material-ui/icons/Message';

const RouteConfig = [
  // HOME
  {
    path: '/',
    label: 'HOME',
    text: '主页',
    icon: <HomeWorkIcon />,
    component: NewLoadable({ loader: () => import('@/views/Home') }),
  },
  // MOOD
  {
    path: '/mood',
    label: 'MOOD',
    text: '心情',
    icon: <MoodIcon />,
    component: NewLoadable({ loader: () => import('@/views/Mood') }),
  },
  // AUDIO
  {
    path: '/audio',
    label: 'AUDIO',
    text: '音频',
    icon: <FeaturedPlayListIcon />,
    component: NewLoadable({ loader: () => import('@/views/Audio') }),
  },
  // VIDEO
  {
    path: '/video',
    label: 'VIDEO',
    text: '视频',
    icon: <VideoLibraryIcon />,
    component: NewLoadable({ loader: () => import('@/views/Video') }),
  },
  // MORE >>> 嵌套路由
  {
    path: '/more',
    label: 'MORE',
    text: '更多',
    icon: <MoreIcon />,
    component: NewLoadable({ loader: () => import('@/views/More') }),
    children: [
      {
        path: '/more/message',
        label: 'MESSAGE',
        text: '消息',
        icon: <MessageIcon />,
        component: NewLoadable({ loader: () => import('@/views/More') })
      }, {
        path: '/more/business',
        label: 'BUSINESS',
        text: '合作',
        icon: <BusinessCenterIcon />,
        component: NewLoadable({ loader: () => import('@/views/More') })
      }
    ]
  },
  // {
  //   path: '/test',
  //   label: 'TEST',
  //   text: '测试一级',
  //   icon: <MoreIcon />,
  //   component: NewLoadable({ loader: () => import('@/views/More') }),
  //   children: [
  //     {
  //       path: '/test/message',
  //       label: 'MESSAGE',
  //       text: '测试二级1',
  //       icon: <MessageIcon />,
  //       component: NewLoadable({ loader: () => import('@/views/More') })
  //     }, {
  //       path: '/test/business',
  //       label: 'BUSINESS',
  //       text: '测试二级2',
  //       icon: <BusinessCenterIcon />,
  //       component: NewLoadable({ loader: () => import('@/views/More') })
  //     }
  //   ]
  // }
];

export default RouteConfig;

