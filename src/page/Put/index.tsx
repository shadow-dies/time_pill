import "./index.css"
import Nav from "../../components/Nav";
import React ,{ useState } from 'react';
import {useNavigate} from "react-router-dom";
import { nanoid } from 'nanoid'
import dayjs from "dayjs"

interface Key{
    value:string,
}


const Put: React.FC = () => {
    const navto = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState(Date.now);
    const [content, setContent] = useState("");
    const [tip, setTip] = useState("");
    const key = nanoid();
    console.log(time)
    const changeName = (e: any) => {
        setName(e.target.value);
    }

    const changeEmail = (e:any) => {
        setEmail(e.target.value);
    }

    const changeTime = (e:any) => {
        setTime(e.target.value);
    }

    const changeContent = (e:any) => {
        setContent(e.target.value);
    }

    const changeTip = (e:any) => {
        setTip(e.target.value);
    }

    const sumit = () => {
        const messege = {
            Name:name,
            Email:email,
            Time: new Date(time).getTime(),
            Content: content,
            Tip: tip
        }
        localStorage.setItem(key,JSON.stringify(messege));
        navto('/put_done', {state:{value:{key}}});
    }

    return( <>
    <Nav open = {false} put = {true}></Nav>
    <div className="container">
        <h1 className="page-header">添加胶囊</h1>
        <div className="main">
            <form method="post">
                <label>你的名字</label>
                <input name="name" type="text" onChange={changeName} />
                {(name === "") && <div className="err">名字不能为空</div>}
                <label>你的邮箱</label>
                <input name="email" type="text" onChange={changeEmail}/>
                {(email === "") && <div className="err">邮箱必须填写</div>}
                <label>打开时间</label>
                <input name="time"  type="text" onChange={changeTime} value = {dayjs(time).format('YYYY-MM-DD HH:mm:ss').toString()}/> 
                <span className="tips">打开时间之前，胶囊内容是看不到的。</span>
                {(time=== null) && <div className="err">内容不能为空</div>}
                <label>胶囊内容</label>
                <textarea className="content"  onChange={changeContent}></textarea>
                <span className="tips">胶囊内容不能超过5000字。</span>
                {(content === "") && <div className="err">内容不能为空</div>}
                <label>未到期提示信息</label>
                <textarea name="tips" onChange={changeTip}></textarea>
                <span className="tips">在 打开时间 之前打开胶囊，会看到提示信息。</span>
                <p ><input type="submit"  value="添加胶囊" onClick={sumit}/></p>
            </form>
        </div>
    </div>
    </>)
}

export default Put;