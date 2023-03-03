import "./index.css"
import Nav from "../../components/Nav";
import React ,{ useState } from 'react';

import { useLocation } from 'react-router-dom'



interface Key{
    value:string,
}

const Put_done: React.FC = () => {
    
    const location = useLocation()
    const { state } = location
    console.log(location, state);
    const [key, setKey] = useState(state.value.key);
    
    const keyChange = (e:any) => {
        setKey(e.target.value);
    }

    return(<>
    <Nav open = {false} put = {true}></Nav>
    <div className="container">
        <h1 className="page-header">胶囊添加成功</h1>
        <div className="main">
            <form>
                <label>胶囊Key</label>
                <input className="key" type="text" onChange={keyChange} value = {key} />
                <span className="tip">你可以复制 key自己保存，也可以发送给你的好友，让他来打开胶囊。 </span>
            </form>
        </div>
    </div>
    </>)
}

export default Put_done;