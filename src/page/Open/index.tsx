import "./index.css"
import Nav from "../../components/Nav";

interface info {
    
}

const Open: React.FC = () => {
    return(<>
    <Nav open = {true} put = {false}></Nav>
    <div className="container">
        <h1 className="page-header">打开胶囊</h1>
        <div className="main">
            <form method="post" >
                <label>胶囊Key:
                    <input name="key" value=""  type="text"/>
                    <input type="submit"  value="打开胶囊"/>
                </label>
            </form>
        </div>
    </div>
    </>)
}

export default Open;
