
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { AuthContext } from "./context/authContext";


import './styles/app.scss'


function App() {
  return (
    <AuthContext.Provider value={{}}>
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    </AuthContext.Provider>
  )
}

export default App
