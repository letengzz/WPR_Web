//定义接口 用于限制每个Person对象的具体属性格式
//使用分别暴露
export interface  PersonInter {
    id: string;
    name: string;
    age: number;
    gender?: string; // 可选属性
}
//定义常量 用于暴露给其他模块
export const a = 9;

//自定义类型：定义一个自定义类型Persons
//两种方式都可以
// export type Persons = Array<PersonInter>;
export type Persons = PersonInter[];

