import * as React from 'react';

export interface Props {
    name: string;
    ecthusiasmLevel?:number;
}

function getExclamationMarks(numChars:number){
    return Array(numChars +1).join('!')
}

function Hello({name,ecthusiasmLevel = 1}:Props){
    if(ecthusiasmLevel <= 0) {
        throw new Error('ecthusiasmLevel至少要一个鸭~')
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(ecthusiasmLevel)}
            </div>
        </div>
    )
}

export default Hello;