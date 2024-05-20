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
    <img src={`/${blogitem.image}`} alt={blogitem.alt} />
    {blogdataitem.map((blogitemText, id) =>(
    <ul key={id}>
        <li>{blogitemText}</li>
        </ul>))}
        {/* {/* <ul>{listItems}</ul> */}
        {nestedData.map((category) => (
        <ul key={`category-${category.id}`}>
          {category.items.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
          ))}
        </ul>
      ))}

    </main>
    )
}

export default BlogItem