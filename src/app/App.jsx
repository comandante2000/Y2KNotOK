import Layout from './pages/layout/Layout';
import Documentation from './pages/documentation/Documentation';
import { Route, Routes } from 'react-router-dom';
import Epilogue from './pages/epilogue/Epilogue';
function App() {
  return (
  <div className='container-fluid app d-flex justify-content-center p-0 m-0'>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/epilouge' element={<Epilogue />} />
    </Routes>
  </div>
    
  )
}

export default App
