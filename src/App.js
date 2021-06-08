import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './rotas/Home'
import NotFound from './rotas/Notfound'
import Loading from './components/Loading'



function App() {
  const [loading, setLoading] = React.useState(false)

  React.useEffect( () => {

      setLoading(false)

  }, [])


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
