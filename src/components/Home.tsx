import { useEffect, useState } from "react";
import { Table } from "antd";
import { getStudents, Student } from "../dataSource";
import { ColumnType } from "antd/es/table";
import Search from "antd/es/input/Search";
import { NavLink } from "react-router-dom";

export function Home() {
    const [dataSourceStudent, setDataSourceStudent] = useState<Student[]>([]);
    const [tableColumns, setTableColumns] = useState<ColumnType[]>([]);
    const [searchItem, setSearchItem] = useState("");
    const [viewList, setViewList] = useState<Student[]>([]);

    function onType(value: string) {
        setSearchItem(value);
        if (value !== "") {
            const filteredList = dataSourceStudent.filter((item) => item.name.includes(value));
            setViewList(filteredList);
        } else {
            setViewList(dataSourceStudent);
        }
    }

    useEffect(() => {
        setDataSourceStudent(getStudents());
        setTableColumns(getStudentColumns());
    }, []); // 只在组件挂载时运行

    useEffect(() => {
        setViewList(searchItem === "" ? dataSourceStudent : dataSourceStudent.filter((item) => item.name.includes(searchItem)));
    }, [searchItem, dataSourceStudent]); // 当 searchItem 或 dataSourceStudent 变化时运行

    return (
        <>
            <article style={{ width: "75%", margin: "auto" }}>
                <h1>学生列表</h1>
                <Search onChange={(e) => onType(e.target.value)} />
                <Table dataSource={viewList} columns={tableColumns} rowKey="id" />
            </article>
        </>
    );
}

function getStudentColumns(): ColumnType[] {
    return [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
        },
        {
            title: "Action",
            key: "action",
            render: (value) => <NavLink to={`/detail?id=${value.id}`}>详情</NavLink>,
        },
    ];
}