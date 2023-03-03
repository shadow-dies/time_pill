import "./index.css"

const Home: React.FC = () => {
    return (<>
    <div className="Main">
        <img className="logo-big" src="	https://p.timepill.net/img/logo_big.png"/>
        <h1 className="title">时间胶囊</h1>
        <div className="action">
            <a className="put" href="/put">
            <span>Open</span>
            添加
            </a>
            <a className="open" href="/open">
                <span>open</span>
                打开
            </a>
        </div>
        <div className="footer"> 
            <a href="/open/38e7687f-15e4-263c-8a8c-bb1d89ea49e0">什么是时间胶囊？</a>
            ·
            <a href="http://www.timepill.net/">回胶囊日记</a>
        </div>
    </div>
    
    </>)
}

export default Home;