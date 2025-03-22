//定义接口，用于限制person对象的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number,
    x?:number,
}

//一个自定义类型
export type Persons = Array<PersonInter>//泛型写法
//export type Persons = PersonInter[]//常规写法