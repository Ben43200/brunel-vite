// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
const BlogItem =(props) =>{
    console.log(props)
    let {BlogItemId} = useParams();
    console.log(BlogItemId)
    console.log("test")
    // const [currentId] = useOutletContext()
    return(
    <main>
    
    <div>{BlogItemId}</div>
    </main>
    )
}

export default BlogItem