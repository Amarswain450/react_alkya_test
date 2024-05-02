import { Suspense } from 'react';
import './App.css'
import Footer from './components/footer/Footer'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Loading from './components/loading/Loading';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import useStore from './store';

function ProtectedRoute({ element }) {
  const { token } = useStore((state) => state);
  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return element;
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
