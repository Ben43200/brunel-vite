// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
import { blogdataitem } from "../../assets/BlogDataItem.jsx";
// import CompletText from "../CompletText.jsx";
const BlogItem =(props) =>{

   console.log(props)
    let {id} = useParams();
    console.log(id)
    const blogitem = BLOGDATAS.find(blogitem => String(blogitem.id) === id);
 
    return(
    <main>
    {/* <img src={`/${blogitem.image}`} alt={blogitem.alt} />
    {blogdataitem.map((blogitemText, id) =>(
    <ul key={id}>
        <li>{blogitemText}</li>
        </ul>))}
        {/* {/* <ul>{listItems}</ul> */}
        {/* {BLOGDATAS.map((category) => (
        <ul key={`category-${category.id}`}>
          {category.completText.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
          ))}
        </ul> */}
      {/* ))}  */}


<h1 className="blog-item-title">{blogitem.name}</h1>
    <img src={`/${blogitem.image}`} alt={blogitem.alt} />
           <div className="complet-text">
            {BLOGDATAS[id].completText.map((completTexti,id) =>(
                <div key={id}>{completTexti}</div>))}
                </div>

    </main>
    )
}

export default BlogItem