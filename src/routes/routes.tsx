import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../page/cadastro/page'
import Login from '../page/logar/login'
import Home from '../page/Home/page'



function Router() {



  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router