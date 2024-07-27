import "./App.css";
import  { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import NotFound from './components/404/404';



const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./components/login/Login'));
const Signup = lazy(() => import('./components/sign up/Signup'));
const Profile = lazy(() => import('./components/profile/Profile'));
const Setting = lazy(() => import('./pages/setting'));
const MyInventory = lazy(() => import('./components/MyInventory/MyInventory'));




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateLoad = setTimeout(() => {
      setIsLoading(false);
    }, 1); 

    return () => clearTimeout(simulateLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader  />}
      <Suspense fallback={<Loader />}>
        {!isLoading && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/myinventory" element={<MyInventory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </Suspense>
    </>
  );
}

export default App;

