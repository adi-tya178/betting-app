//import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar  from './components/Navbar';
import CompanyNews from './components/ComapanyNews';
import SocialLinks from './components/SocialLinks';
import Cards from './components/Cards';
import Footer from './components/Footer';
import VerticalCardContainer from './components/verticalCardContainer';
function App() {
  return (
    <div className="App">
       <Navbar />
       <div className="container mx-auto px-4">
        <CompanyNews />
        {/* Add other components or content here */}
      </div>
      <Cards/>
      
      <SocialLinks/>


      <VerticalCardContainer/>
    
      
       
       <Footer/>
    </div>
  );
}

export default App;
