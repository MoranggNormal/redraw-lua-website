import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './rotas/Home'
import NotFound from './rotas/Notfound'


function App() {
  return (
    <BrowserRouter>
<Header />
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="*" element={<NotFound />} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
