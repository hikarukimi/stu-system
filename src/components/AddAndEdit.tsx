import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import {addStudent, getStudentById, Student, updateStudent} from "../dataSource";
import { useLocation, useNavigate } from "react-router-dom";

export function AddAndEdit() {
    const id = Number(useLocation().search.split("=")[1]);
    const [student, setStudent] = useState<Student | null>(null);
    const [form] = Form.useForm(); // 获取表单实例
    const navigateFunction = useNavigate();

    const onFinish = (student: Student) => {
        if(id){
            student.id = id;
            updateStudent(student)
        }else{
            addStudent(student)
        }

        navigateFunction("/");
    };

    useEffect(() => {
        if (!isNaN(id)) {
            const studentData = getStudentById(id).data; // 假设 getStudentById 是同步的
            setStudent(studentData);
            form.setFieldsValue(studentData); // 手动更新表单值
        }
    }, [id, form]);

    return (
        <>
            <Form
                form={form} // 绑定表单实例
                name="basic"
                style={{ margin: "auto", maxWidth: "500px" }}
                initialValues={student||{}} // 初始值
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<string>
                    label="name"
                    name="name"
                    rules={[{ required: true, message: "Please input your name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<number>
                    label="age"
                    name="age"
                    rules={[{ required: true, message: "Please input your age!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<number>
                    label="phoneNumber"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Please input your phoneNumber!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}