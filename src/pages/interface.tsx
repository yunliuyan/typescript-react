import * as React from 'react';


interface LabelledValue {
    label: string
}

interface like {
    like: string;
}

interface SquareConfig extends LabelledValue,like {
    color?: string;
    width?: number;
readonly shape: string;    
[propName: string]: any;
}


class Interface extends React.Component<LabelledValue,SquareConfig>{
    printLabel=(labelledobj:LabelledValue)=>{
        return labelledobj.label
    };

    createSquare=(config: SquareConfig)=>{
        let newSquare = {color: 'white',area:100};
        if(config.color){
            newSquare.color = config.color;
        }
        if(config.width){
            newSquare.area = config.width * config.width;
        }
        return `{color: ${newSquare.color},area: ${newSquare.area},shape: ${config.shape},lable: ${config.label},like:${config.like}}`
    }
    render(){
        let myObj = {size:10,label:"hello,云流烟"}
        let mySquare = this.createSquare({color:'block',shape:'正方形',label:'hello，蝉嘶雪',like:'看书'});
        
        return(
            <div>
                <h3>typescript的核心原则之一是对值所具有的结构进行类型检查。它有时被称作“鸭式辨型法”或“结构性子类型法”。
                    在typescript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
                </h3>
                <div>{this.printLabel(myObj)}</div>
                <h3>接口里的属性不全都是必需的。有些事只在某些条件下存在，或者根本不存在。可选属性在应用“option bags”模式时很常用</h3>
                <div>{mySquare}</div>
                <h3>只读属性</h3>
                <div>readonly:{mySquare}中的shape不可更改。与const类似。两者的区别在于一个声明变量，一个声明属性</div>
                <h3>继承接口</h3>
                <div>{mySquare}中的lable,like是继承其他的接口</div>
            </div>
        )
    }
}

export default Interface;