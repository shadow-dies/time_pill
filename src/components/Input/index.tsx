import "./index.css"

interface info {
    name?: string,
    classname?: string,
    type?: string,
    isNotnull?: boolean,
    value?:string,
    onChange?:any,
}

const Input : React.FC<info> = (props) => {
    const {name, classname, type, onChange, isNotnull} = props;
    return(<>
    <div className="err">{name} 必须填写</div>
    <input type={type} className={classname} onChange={onChange}/>
    </>)
}

export default Input;