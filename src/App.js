import Home from './components/pages/Home';
import Header from "./organisms/AppHeader";
import Footer from "./organisms/AppFooter";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/style.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>

  );
}

export default App;
