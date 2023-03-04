import "./index.css"
import Nav from "../../components/Nav";
import React ,{ useState } from 'react';
import dayjs from "dayjs";

interface Info {
    Name?:string,
    Email?:string,
    Time?: number,
    Content?: string,
    Tip?: string
}
const i:Info = {};

const Open: React.FC = () => {
    const [key, setKey] = useState("");
    const [isOpen,setIsopen] = useState(false);
    const [isTip,setIstip] = useState(false);
    const [notFound, setNotfound] = useState(false);
    const [info, SetInfo] = useState(i) ;
    const ChangeKey = (e:any) => {
        setKey(e.target.value);
        console.log(key);
    }
    const openPill = () => {
        if(localStorage.getItem(key)) {
            const msg:Info = JSON.parse(String(localStorage.getItem(key)));
            SetInfo(msg);
            if(Date.now() >= Number(msg.Time)) {
                setIsopen(true);
                setIstip(false);
                setNotfound(false);
                console.log("success")
            }   
            else {
                setIsopen(false);
                setIstip(true);
                setNotfound(false);
            }
        }
        else {
            setNotfound(true);
            setIstip(false);
            setIsopen(false);
            console.log("notfound")
        }
    }
    return(<>
    <Nav open = {true} put = {false}></Nav>
    <div className="container">
        <h1 className="page-header">打开胶囊</h1>
        <div className="main">
            <label>胶囊Key:
                <input name="key"  type="text" value={key} onChange={ChangeKey}/>
                <button onClick={openPill}>打开胶囊</button>
                { (isOpen === true) && <div className="pill">
                    <h2>{info.Name} 在 {dayjs(info.Time).format('YYYY-MM-DD HH:mm:ss').toString()} 对你说：</h2>
                    <div className="content">
                    <pre>{info.Content}</pre>
                    </div>
                </div>}
                { (notFound === true) && <div className="notfound">没有这个胶囊Key</div>}
                {(isTip === true) && 
                <div className="pill">
                    <h2>这颗胶囊未到提取时间，不能打开。</h2> 
                    <p>打开时间在 <b>{dayjs(info.Time).format('YYYY-MM-DD HH:mm:ss').toString()}</b></p>
                    <div className="content">
                        <p><label><b>{info.Name}</b> 给你留的提示信息：</label></p>
                        <pre>{info.Tip}</pre>
                    </div>
                </div>}
            </label>
        </div>
    </div>
    </>)
}

export default Open;
