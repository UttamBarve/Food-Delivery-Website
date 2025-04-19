import UserContext from './Context/UserContext'
import Home from './Pages/Home'
import { ToastContainer, toast } from 'react-toastify';
function App() {

  return (
    <UserContext>
    <Home />
    <ToastContainer position="top-left"/>
    </UserContext>
  )
}

export default App
