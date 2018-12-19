import * as React from 'react';

   
    export interface Props {
        
    }
    interface State {
        isDone: boolean;
        decLiteral: number;
        hexLiteral: number;
        binaryLiteral: number ;
        octalLiteral: number;
        name: string;
        list: number[];
        list1: Array<number>;
        x: [string, number];
        noSure: any;
        unusable: void;
        u: undefined;
        n: null;
        obj: {
            name: string,
            age:number,
        };
    }
class BaseType extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            isDone: false,
            decLiteral: 12,
            hexLiteral: 0xf00d,
            binaryLiteral: 0b1010,
            octalLiteral: 0o744,
            name: '云流烟',
            list: [1,2,3],
            list1: [4,5,6],
            x: ['hello',10],
            noSure: 2,
            unusable: undefined,
            u: undefined,
            n: null,
            obj: {
                name: '云流烟',
                age: 18
            },
        }
    } 
    render() {
      let { isDone,decLiteral,hexLiteral, binaryLiteral,octalLiteral,name,list,
                list1,x,noSure,unusable,u,n,obj } = this.state;
        enum Color {red=1,green,Bule};
        let c: Color = Color.green;
        let colorName: string = Color[2];
        noSure = '潇潇雨歇';
        let nameLength:number = (name as string).length; 
        return(
            <div>
                <h3>基本类型：布尔类型，number,string,数组，元组，枚举，对象，any,void,enum,never,null,undefined</h3>
                <div>let isDone:boolean  = {`${isDone}`};</div>
                <div>let decLiteral: number = {decLiteral};</div>
                <div>let hexLiteral: number = {hexLiteral};</div>
                <div>let binaryLiteral: number = {binaryLiteral};</div>
                <div>let octalLiteral: number = {octalLiteral};</div>
                <div>let name: string = {`${name}今年${binaryLiteral+decLiteral}岁`};</div>
                <div>let list: number[] = {`[${list.join(',')}]`}</div>
                <div>let list1: Array{`<number>`} = {`[${list1.join(',')}]`}</div>
                <div>let x: [string,number] = {`[${x.join(',')}].${x[0]}去掉第一个字母变为:${x[0].substr(1)}`}</div>
                <div>let c: Color = {c}</div>
                <div>let colorName: string = {colorName}</div>
                <div>let noSure: any = {noSure}</div> 
                <div>let unusable: void = {`${unusable}`}</div>
                <div>let u: undefined = {`${u}`}</div>
                <div>let n: null = {`${n}`}</div>
                <div>let obj: object = {`{name:${obj.name},age:${obj.age}}`}</div>
                <h3>类型断言</h3>
                <div>有时候需要对某个值进行类型设置，不需要ts去检查</div>
                <div>1:用尖括号语法：不适合在tsx里面，因为会当做标签识别</div>
                <div>2：用as语法: let nameLength:number = {nameLength};</div>
            </div>
        )
    }
}

export default BaseType;