import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from"./Pages/SignupPage";
import Footer from "./components/Footer/Footer";
import HostRoomPage from "./Pages/HostRoomPage";
import ShopPage from"./Pages/ShopPage";
import CommunityPage from"./Pages/CommunityPage";
import withAuth from "./hoc/withAuth"
import Posting from "./Pages/Posting";
import ModifyPage from "./Pages/ModifyPage";
import PostPage from "./Pages/PostPage";
import ProblemInsertpage from "./Pages/ProblemInsertpage";
function App() {
  return (
    <div style={{minWidth:'710px'}}>

      <Navbar/>

      <div style={{paddingTop:'20px' ,minHeight: 'calc(100vh -80px)' }}> 
        <Routes>
          <Route exact path="/" element={withAuth(LandingPage,null)}/>
          <Route exact path="/login" element={ withAuth(LoginPage,false) }/>
          <Route exact path="/signup" element={ withAuth(SignupPage,false) } />
          <Route exact path="/host" element={ withAuth(HostRoomPage,true) } />
          <Route exact path="/shop" element={ withAuth(ShopPage,true) } />
          <Route exact path="/community" element={ withAuth(CommunityPage,true) } />
          <Route exact path="/posting" element={ withAuth(Posting,true) } /> 
          <Route exact path="/ModifyPage" element={ withAuth(ModifyPage,true) } /> 
          <Route  path={"/PostPage/:post_id"} element={ withAuth(PostPage,true)} />
          <Route  path={"/ProblemInsertpage"} element={ withAuth(ProblemInsertpage,true)} />
        </Routes>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;
