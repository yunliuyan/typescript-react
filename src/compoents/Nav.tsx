import * as React from 'react'
import { Link } from 'react-router-dom'

 interface State {
    navList: any[]
  }
  export interface Props {

  }
  const navFloat: object = {
      float: 'left',
      cursor: 'pointer',
  }
class Nav extends React.Component<Props,State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            navList: [
                {
                    name:'基础类型',
                    path: '/'
                },
                {
                    name:'变量声明',
                    path: '/Variable'
                },
                {
                    name:'接口',
                    path: '/interface'
                },
                {
                    name:'类',
                    path: '/aboutClass'
                },
                {
                    name:'函数',
                    path: '/baseType'
                },
                {
                    name:'泛型',
                    path: '/baseType'
                },
                {
                    name:'枚举',
                    path: '/baseType'
                }
            ]

        }
    }
    public  render() {
        const { navList } = this.state;
        return (
            <div style={navFloat}>
                {
                    navList.map((item,index)=>{
                        return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                    })
                }
            </div>
        )
    }
}

export default Nav;
