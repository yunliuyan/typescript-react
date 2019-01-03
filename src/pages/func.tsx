import * as React from 'react';

export interface Props {

}
interface State {

}
class Variable extends React.Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {

        }
    }
    add=(x:number,y:number):number=>{
        return x+y
    }
    buildName=(obj:{firstName:string,lastName:string}):string=>{
        return obj.firstName + '-' + obj.lastName;
    }
    render(){
        return(
            <div>
                <div> 函数是JavaScript应用程序的基础。它帮助你实现抽象层，模拟类，信息隐藏和模块、在typescript里，虽然已经支持类，命名空间和模块
                        但函数仍然是主要的定义行为的地方。typescript为JavaScript函数添加了额外的功能，让我们更容易使用。
                </div>
                <div>{this.add(1,2)}</div>
                <div>typescript里的每个函数参数都是必需的，即传递给一个函数的参数个数必需与函数期望的参数个数一致</div>
                <div>{this.buildName({firstName:'云',lastName:'流烟'})}</div>
                <div>JavaScript里，this的值在函数被调用的时候才会指定。</div>
            </div>
        )
    }
}

export default Variable;