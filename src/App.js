
import './App.css';
import Pokemonfetch from './container/pokemonApi';
import bgimg from './assets/pokibg.jpg';
import Headerpoki from './container/header/header';
import Imgscroll from './container/imagescroll/imageMain.jsx'
import Pokiside from './container/sides/pokiside.jsx';

function App() {
  return (
    <div className="App">
    <Headerpoki/>
    <Imgscroll/>
    <Pokiside/>
    </div>
  );
}

export default App;
