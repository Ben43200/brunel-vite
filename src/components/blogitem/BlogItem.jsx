// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
const BlogItem =() =>{
   
    let {id} = useParams();
    console.log(id)
    const blogitem = BLOGDATAS.find(blogitem => String(blogitem.id) === id);
    // console.log(blogitem)
    // console.log("test")
    // const [currentId] = useOutletContext()
    return(
    <main>
    <img src={`/${blogitem.image}`} alt={blogitem.alt} />
    {/* <div key={id}>{blogitem.completText}</div> */}
    </main>
    )
}

export default BlogItem