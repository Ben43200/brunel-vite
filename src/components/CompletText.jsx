
import { BLOGDATAS } from "../assets/BlogData.jsx"
const CompletText = ({completText}) =>{
    const testings = BLOGDATAS.filter(completText =>
        blogdata.category === "Testing"
        const arrayDataItems = testings.map(completText =>
            <li key={completText.id}>
                <span>{completText}</span>
                </li>
        )
    )
    return (
        // <ul>
        //     {BLOGDATAS.completText.map((completTexti,id) =>(
        //         <li key={id}>{completTexti}</li>
        //     ))}
        // </ul>
        <ul>{arrayDataItems}</ul>
    )
}

export default CompletText