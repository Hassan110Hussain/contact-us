import './App.css';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from './Components/Navigation/Navigation';
import ContractForm from './Components/ContactForm/ContractForm';

function App() {

  return (
  <div>
    <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
    <ContractForm/>
    </main>
  </div>
  );
}

export default App;
