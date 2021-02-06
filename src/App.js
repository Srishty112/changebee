import Navbar from './components/Navbar'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Footer from './components/footer';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './theme'

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Comp1/>
    <Comp2/>
    <Footer/>
    <br/>
    </ThemeProvider>
    
    </div>
  );
}

export default App;
