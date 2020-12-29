/**
 * 
 * @description 路由配置文件
 * @date 2020-12-25 🎄圣诞快乐
*/
import NewLoadable from '@/common/components/NewLoadable';


const RouteConfig = [
  // HOME
  {
    path: '/',
    label: 'HOME',
    component: NewLoadable({ loader: () => import('@/views/Home') }),
  },
  // MOOD
  {
    path: '/mood',
    label: '课程列表',
    component: NewLoadable({ loader: () => import('@/views/Mood') }),
  },
  // AUDIO
  {
    path: '/audio',
    label: '课程列表',
    component: NewLoadable({ loader: () => import('@/views/Audio') }),
  },
  // VIDEO
  {
    path: '/video',
    label: '课程列表',
    component: NewLoadable({ loader: () => import('@/views/Video') }),
  },
  // MORE >>>
  {
    path: '/more',
    label: '课程列表',
    component: NewLoadable({ loader: () => import('@/views/More') }),
  }
];

export default RouteConfig;

