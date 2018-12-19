import * as React from 'react';

class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return  `hello,${this.greeting}`;
    }
}


class Animal {
   name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
       return `${this.name}跑了 ${distanceInMeters} 米`
    }
}
class Dog extends Animal {
    bark() {
        return '汪汪汪~~'
    }
}
class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    moved(distanceInMeters:number = 5) {
       return super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: string) { super(name); }
    moved(distanceInMeters:number = 45) {
        console.log("Galloping...");
       return super.move(distanceInMeters);
    }
}


class Person {
    protected name:string;
    constructor(name: string){
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;
    readonly justRead: string = '这是一个只能读取不能改写的值';
    constructor(name:string,department: string){
        super(name)
        this.department = department;
    };
    public getElevatorPitch() {
        return `大家好，我是${this.name},我的工作是${this.department}`
    }
}

//存取器
let passcode = '云流烟123123';
class GetSet {
    private _fullName: string='小帅比';

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName:string) {
        if(passcode && passcode == '云流烟123123'){
            this._fullName = newName
        }else{
            console.log('未经过授权，不能篡改类里面的值哦~')
        }
    }
}


//静态属性
class Grid  {
    static origin = {x:0,y:0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

//抽象类
abstract class AbstractClass {
    constructor(public name:string){

    }
    printName(): string {
        return `抽象类：${this.name}`;
    }

    abstract printMeeting(): string; //必须在派生类中实现
}

class sonAbstractClass extends AbstractClass {
    constructor(){
        super('抽象类的派生类')
    }
    printMeeting():string{
        return '这是内部派生类哦~在子类具体实现的'
    }
    generateReports(): string {
        return '这只抽象类的派生类里面定义的方法'
    }
}

class AboutClass extends React.Component {
    render() {
        let sam = new Snake("小青蛇");
        let tom = new Horse("小白马");
        let mine = new Employee('云流烟','前端工程师');
        let getSetValue = new GetSet();
        getSetValue.fullName='小坑比';
        let grid1 = new Grid (1.0);
        let grid2 = new Grid(5.0); 
        let sonAbstractClass1 = new sonAbstractClass()
        return (
            <div>
                <h3>一个简单的类</h3>
                <div>{new Greeter('world').greet()}</div>
                <h3>类的继承</h3>
                <div> {new Dog('旺财').bark()}{ new Dog('旺财').move(10)}  </div>
                <div>{sam.moved()} {tom.moved()}</div>
                <h3>typescript 所有定义的成员都是默认为public，当成员被标记为private时，它就不能再声明它的类的外部访问。</h3>
                <h3>protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。</h3>
                <div>{mine.getElevatorPitch()}</div>
                <h3>readonly修饰符将属性设为只读，只读属性必须在声明时或者在构造函数里被初始化</h3>
                <div>{mine.justRead}</div>
                <h3>存取器：typescript 支持通过getters/setters来截取对对象成员的访问。它能有效的控制对对象成员的访问</h3>
                <div>{getSetValue.fullName}</div>
                <h3>类里面可以设置静态属性，类似于在函数里面定义常量，用类名.来访问</h3>
                <div>{grid1.calculateDistanceFromOrigin({x: 10, y: 10})}||{grid2.calculateDistanceFromOrigin({x: 10, y: 10})}</div>
                <h3>抽象类作为其他派生类的基类使用。它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节，abstract关键字是用于定义抽象类和类内部定义抽象方法</h3>
                <h3>抽象类中的抽象方法不包括具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。两者都是定义方法签名但不包括方法体。然而，抽象方法包含abstract关键字并且可以包含访问修饰符。</h3>
                <div>{sonAbstractClass1.printName()}{sonAbstractClass1.printMeeting()}{sonAbstractClass1.generateReports()}</div>
                <h3>可以把类当做接口用</h3>
            </div>
        )
    }
}


export default AboutClass