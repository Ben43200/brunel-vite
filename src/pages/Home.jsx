import "./home.scss"
const Home = () => {
return(
    <main>
    <p className="sub-title">Titre</p>
    <img src= {new URL('../assets/photo1.webp', import.meta.url).href} alt="photo1" />
    </main>
)
}
export default Home