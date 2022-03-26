import login from './login.png';
import { AppContextProvider } from './AppContext/AppContext';
import { Home } from './Home/Home';
import { Login } from './Login/Login';
import { Create } from './Create/Create';
import { User } from './User/User';
import { Profile } from './User/Profile/Profile';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'; 

function App() {

  return (
    <AppContextProvider>
      <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#8fbea7' }}>
        <img src={login} alt="" style={{ position: 'absolute', width: '33%', bottom: 0, right: 0 }}/>
      </div>
      <div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Login" element={ <Login /> } />
            <Route path="/Create" element={ <Create /> } />
            <Route path="/User" element={ <User /> }>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>   
      </div>
    </AppContextProvider>
  );
}

export default App;
