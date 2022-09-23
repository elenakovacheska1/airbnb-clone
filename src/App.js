import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

function App() {
  let cards = data.map(item => 
    {return <Card
      key={item.id} 
      item={item}
    />});
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='app--cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
