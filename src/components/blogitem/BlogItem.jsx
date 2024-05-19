// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import CompletText from "../CompletText.jsx";
const BlogItem =() =>{
    // console.log(completText)
   
    let {id} = useParams();
    console.log(id)
    const blogitem = BLOGDATAS.find(blogitem => String(blogitem.id) === id);
    // console.log(blogitem)
    // console.log("test")
    // const [currentId] = useOutletContext()
    return(
    <main>
    <img src={`/${blogitem.image}`} alt={blogitem.alt} />
    {BLOGDATAS.map((blogitem, id) =>(
    <ul key={id}>
        <li>{blogitem.completText}</li>
        </ul>))}
    </main>
    )
}

export default BlogItem