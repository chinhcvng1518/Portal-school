import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
  ForgotPassword,
  ResetPassword,
  About,
  Strength,
  Huongnghiep,
  Tuvan,
  Hocphi,
} from './pages';

import { useGlobalContext } from './context';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cntt from './pages/Nganh/Cntt';
import Cntc from './pages/Nganh/Cntc';
import Bds from './pages/Nganh/Bds';
import Cntthong from './pages/Nganh/Cntthong';
import Vienquocte from './pages/Vienquocte';
import Doanhnghiep from './pages/Doanhnghiep';
import UserManagement from './pages/admin/UserManagement';
import NewsManagement from './pages/admin/NewsManagement';
import SingleNew from './pages/SingleNew';
import Tinsukien from './components/Dashboard/Tinsukien';
import Tintuyensinh from './pages/Tintuyensinh';
import Search from './pages/Search';
function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <ProtectedRoute path='/dashboard' exact>
          <Dashboard />
        </ProtectedRoute>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/user/verify-email' exact>
          <Verify />
        </Route>
        <Route path='/user/reset-password' exact>
          <ResetPassword />
        </Route>
        <Route path='/gioithieu' exact>
          <About/>
        </Route>
        <Route path='/themanh' exact>
          <Strength/>
        </Route>
        <Route path='/huongnghiep' exact>
          <Huongnghiep/>
        </Route>
        <Route path='/cntt' exact>
          <Cntt/>
        </Route>
        <Route path='/bds' exact>
          <Bds/>
        </Route>
        <Route path='/search' exact>
          <Search/>
        </Route>
        <Route path='/cntthong' exact>
          <Cntthong/>
        </Route>
        <Route path='/cntc' exact>
          <Cntc/>
        </Route>
        <Route path='/tin-tuyen-sinh' exact>
          <Tintuyensinh/>
        </Route>
        <Route path='/tu-van-tuyen-sinh' exact>
          <Tuvan/>
        </Route>
        <Route path='/hocphi' exact>
          <Hocphi/>
        </Route>
        <Route path='/vqt' exact>
          <Vienquocte/>
        </Route>
        <Route path='/dn' exact>
          <Doanhnghiep/>
        </Route>
        <Route path='/tin-tuyen-sinh/:id' exact>
          <SingleNew/>
        </Route>
        <ProtectedRoute path='/users-management' exact>
          <UserManagement />
        </ProtectedRoute>
        <ProtectedRoute path='/news-management'>
          <NewsManagement/>
        </ProtectedRoute>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
