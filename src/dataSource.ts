// 定义学生信息的类型

import {Result} from "./types/result";

export type Student = {
    id: number;
    name: string;
    age: number;
    phoneNumber: string;
};
let students: Student[] =[
    {
        id: 1,
        name: "Alice",
        age: 10,
        phoneNumber: "123-456-7890",
    },
    {
        id: 2,
        name: "Bob",
        age: 11,
        phoneNumber: "234-567-8901",
    },
    {
        id: 3,
        name: "Charlie",
        age: 12,
        phoneNumber: "345-678-9012",
    },
    {
        id: 4,
        name: "David",
        age: 9,
        phoneNumber: "456-789-0123",
    },
    {
        id: 5,
        name: "Eve",
        age: 10,
        phoneNumber: "567-890-1234",
    },
];

// 生成学生列表的函数
export function getStudents(): Student[] {
    return students
}
export function getStudentById(id: number): Result {
    let student = students.find((student) => student.id === id);
    if(student===null){
        return {
            success: false,
            message: "Student not found",
        };
    }
    return {
        success: true,
        message: "Student found",
        data: student,
    };
}
export function addStudent(student: Student):Result {
    students.push(student);
    return {
        success: true,
        message: "Student added successfully",
        data: students,
    };
}
export function updateStudent(student: Student):Result {
    let index = students.findIndex((it) => it.id === student.id);
    if (index === -1) {
        return {
            success: false,
            message: "Student not found",
        };
    }
    students[index] = student;
    console.log(JSON.stringify(students[index]))
    return {
        success: true,
        message: "Student updated successfully",
        data: students,
    };
}
export function removeStudentById(id:number):Result{
    students=students.filter((it)=>{
        return it.id!==id
    })
    return {
        success:true,
        message:"remove success"
    }
}