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
    render(){
        return(
            <div>
                <div>es6那一套，let和const代替了var,这样可以去除变量提升。let和const的区别使用：let声明变量，const声明之后的变量不能再次修改</div>
            </div>
        )
    }
}

export default Variable;