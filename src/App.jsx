import Demo from "./compo/Demo"
import Hero from "./compo/Hero"


const App = () => {
  return (
    <>
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero>
        </Hero>
        <Demo />
      </div>
    </main>
    </>
  )
}

export default App