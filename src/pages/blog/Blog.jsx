import { BLOGDATAS } from "../../assets/BlogData.jsx"


const Blog = () =>{

    return(
        <main>
        {BLOGDATAS.map((blogdata, index) =>
        <div key={index}>
            <h1>{blogdata.name}</h1>
            <img src={blogdata.image} alt={`${blogdata.alt}`} width="200"/>
            <p>{blogdata.text}</p>
        </div>
        )}
    </main>
    )
} 

export default Blog
        
  
       
    
