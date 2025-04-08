import {useLocation, useNavigate} from "react-router-dom";
import {getStudentById, removeStudentById} from "../dataSource";
import {Button, Card} from "antd";

export function Detail() {

    let id=Number(useLocation().search.split("=")[1])

    let student=getStudentById(id).data
    let navigate=useNavigate()

    function onBack() {
        navigate("/")
    }
    function onEdit() {
        navigate("/edit?id="+id)
    }

    function onDelete() {
        removeStudentById(id)
        onBack()
    }


    return (
        <article style={{margin: "auto", width: "50%"}}>
            <Button size={"large"} onClick={onBack}>返回</Button>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1>姓名：{student.name}</h1>
                <div>
                    <Button size={"large"} onClick={onEdit}>修改</Button>
                    <Button size={"large"} onClick={onDelete}>删除</Button>
                </div>
            </div>
            <Card style={{margin: "auto"}}>
                <h3>年龄：{student.age}</h3>
                <h3>电话：{student.phoneNumber}</h3>
            </Card>
        </article>
    );
}