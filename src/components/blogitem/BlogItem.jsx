// import { BLOGDATAS } from "../../assets/BlogData.jsx";
// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BLOGDATAS } from "../../assets/BlogData.jsx";
import { blogdataitem } from "../../assets/BlogDataItem.jsx";
// import CompletText from "../CompletText.jsx";
const BlogItem =(props) =>{
    // console.log(completText)
   console.log(props)
    let {id} = useParams();
    console.log(id)
    const blogitem = BLOGDATAS.find(blogitem => String(blogitem.id) === id);
    // const listItems = blogdataitem.map(blogitem => <li key={`${blogitem.id}`}>{blogitem}</li>)
    // console.log(blogitem)
    // console.log("test")
    // const [currentId] = useOutletContext()
    const nestedData = [
        { id: 1, items: ['Apple', 'Banana'] },
        { id: 2, items: ['Strawberry', 'Pineapple'] },
      ];
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