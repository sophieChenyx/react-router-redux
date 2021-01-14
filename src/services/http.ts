/*
 * @Author: 
 * @Date: 2021-01-12 17:44:39
 * @LastEditTime: 2021-01-14 14:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tsapiproject/src/services/http.ts
 */

const env = process.env.NODE_ENV;
const protocol = document.location.protocol;
const url = env === 'development' ? protocol + '//localhost:8080' : '';



/**
 * 
 * HTTP method 请求方法
 * (枚举字符串 )
 * enum E2 {A = 1, B, C } => 数字枚举 B C基于 前者加 1  m
 * 枚举本质是 存了 枚举名 枚举值的对象 
 * @description : 枚举request 请求的method 的方法 
 * @param {type} 枚举类型
 * @return : 
*/

// export enum HttpMethod {
//   get =  'GET',
//   post =  'POST',
//   delete =  'DELETE',
//   put = 'PUT',
//   patch =  'PATCH'
// }
export interface IHttpMethod {
  get: string;
  post: string;
  delete: string;
  put: string;
  patch: string;
}

export const HttpMethod: IHttpMethod = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
  patch: 'PATCH'
}

/**
 * @description： 枚举请求数据格式类型
 * @param {type} 枚举类型
 * @returns
 * 
*/
export enum ContentType {
  json = 'application/json;charset=UTF-8',
  form = 'application/x-www-form-urlencoded;charset=UTF-8'
}

/**
 * 
 * @description : 声明请求头header 的类型
 * @param {type} 
 * @return
*/

export interface IHTTPHeader {
  credentials: string;  // 是否携带 cookie
  'Content-Type': string;   // 请求方式
  [propName: string]: any;  // 任意 kv
}

/**
 * @description:
 * @param {*}
 * @return {*}
 */

// getFetch<R,P={}>(url: string, params?:P, options?:RequestInit): Promise<R>;
export interface IRequest {
  get<R, P = {}>(url: string, data?: P, options?: RequestInit): Promise<any>;
  post<R, P = {}>(url: string, data?: P, options?: RequestInit): Promise<R>;
  patch<R, P = {}>(url: string, data?: P, options?: RequestInit): Promise<R>;
  delete<R, P = {}>(url: string, data?: P, options?: RequestInit): Promise<R>;
  put<R, P = {}>(url: string, data?: P, options?: RequestInit): Promise<R>;
}

// request.get('api', data, header options) 返回一个 Promise 
// Request 方法
let http: IRequest | any = {};

var method: (keyof IHttpMethod);
for (method in HttpMethod) {
  const defaultOptions = {
    credentials: 'include'
  }
  const baseUrl = url;
  const reqOptions = {
    // method: HttpMethod[method],
    ...defaultOptions,
  }
  http[method] = (url: string, data?: any, options?: any) => {
    let reqUrl = `${baseUrl}/${url}`;
    console.log('>>>>>>>>>> 请求 .url >>>>>>', method);
    return fetch(url, {
      ...defaultOptions,
      ...options
    }).then(res => res.json())
      .then(data => {
        // 处理返回 data 
        console.log('>>>>>> data')
        if (!data.msg) {
          console.log('>>>>> 后端请求报错 >>>>>');
        }
        return data
      })
      .catch(e => {
        // 错误情况处理
        // ...
        return e.response;
      })
  }
}

console.log(
  '>>>>>>>>> http',
  http
)

export {
  http as request
};


