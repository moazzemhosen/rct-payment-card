import { Card } from './components/Card';
import './App.css';

function App() {
  const card1 = {
    date: "20/10/2022",
    case: "Case Study",
    type: "Amazon Gift",
    payment: "Pay",
    icon:"Desktop - Mobile"
  }

  const card2 = {
    date: "17 Sep 2020",
    case: "Case Study",
    type: "Apple Gift",
    payment: "Payment",
    icon: "MacOS - Mobile"
  }

  return (
    <div className="App">
      <Card init={card1} />
      <br/>
      <Card init={card2} />
      
    </div>
  );
}

export default App;
