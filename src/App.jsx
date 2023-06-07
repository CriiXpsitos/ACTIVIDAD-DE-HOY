import Message from "./components/Message"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  return(
  <>
  <h1>hola</h1>
  <Message text = "Desde un boton" />
  <Message text = "Desde otro boton" />
  <Counter />
  <Header/>
  <Footer/>
  <Main/>
  </> 
  )
}

export default App
