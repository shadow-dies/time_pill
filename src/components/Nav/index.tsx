import "./index.css"

interface flag {
    put: boolean;
    open: boolean;
}

const Nav:React.FC<flag> = ({put, open}) => {
    return(<>
    <div className="header">
        <div className="container">
            <a className="logo" href="/">时间胶囊</a>
            <ul className="nav">
                <li><a href="/">首页</a></li>
                <li className= {put ? "active" : ""}><a href="/put">添加</a></li>
                <li className= {open ? "active" : ""}><a href="/open">打开</a></li>
            </ul>
        <ul className="nav nav-user">
            <li><a href="http://www.timepill.net/">回胶囊日记</a></li>
        </ul>
        </div>
    </div>
    </>)
} 

export default Nav;