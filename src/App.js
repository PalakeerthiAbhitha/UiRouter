
import './App.css';
import {Login} from './login';
import {ContactUs0} from "./login";
import {ContactUs} from "./login";
import {ContactUs1} from "./login";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Login/>}></Route>
      <Route path="/contactus0" element={<ContactUs0 />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/contactus1" element={<ContactUs1 />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
