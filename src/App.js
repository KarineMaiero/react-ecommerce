// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './components/pages/Home';
import Header from './organisms/AppHeader';
import Footer from './organisms/AppFooter';
import Recipes from './components/pages/Recipes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Header />
    //       <Route path="/" element={<Home />} />
    //       <Route path="/recipes" element={<Recipes />} />
    //     <Footer />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Header />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
