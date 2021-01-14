/**
 * @description 首页 推送最新的上传信息 
 * @date 2020-12-25 🎄圣诞快乐
*/
//  请求最新的 音频列表
import React, { useEffect } from 'react';
import { IBaseProps } from "@/common/js/reactIInter";
import { request } from '@/services/http';

const Index: React.FC<IBaseProps> = () => {

  useEffect(() => {

    // fetch('api/artslist').then((res?: any) => {
    //   console.log('返回数据><<<<<<<<<<<<<<<', res)
    // })

    request.get('/api/artslist', {}, {
      method: 'GET'
    }).then((res?: any) => {
      console.log('返回数据><<<<<<<<<<<<<<<', res)
      
    })

  }, [])

  return <>
    <h1>Audio</h1>
  </>
}




export default Index;

