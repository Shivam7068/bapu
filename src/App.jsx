import React, { Suspense, lazy } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

// importing pages 
import Home from "./pages/Home";
import Loader from './component/common_comp/Loader';
import Whatsapp from './layout/Whatsapp';
import Applynow from './pages/Applynow';
import Facility from './component/course/Facility';
const Footer = lazy(() => import("./layout/Footer"));
const Navbar = lazy(() => import("./layout/Navbar"));
const About = lazy(() => import("./pages/About"));
const Affilation = lazy(() => import("./pages/Affilation"));
const Course = lazy(() => import("./pages/Course"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Managementeam = lazy(() => import("./pages/Managementeam"));
const Ncism = lazy(() => import("./pages/Ncism"));
const Registrar = lazy(() => import("./pages/Registrar"));
const ViceChancellor = lazy(() => import("./pages/ViceChancellor"));

const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/applynow' element={<Applynow />}></Route>

          <Route exact path='/about' element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>}>
          </Route>

          <Route exact path='/about/mentors' element={
            <Suspense fallback={<Loader />}>
              <Managementeam />
            </Suspense>}>
          </Route>

          <Route exact path='/about/course' element={
            <Suspense fallback={<Loader />}>
              <Course />
            </Suspense>}>
          </Route>

          <Route exact path='/facility' element={
            <Suspense fallback={<Loader />}>
              <Course />
            </Suspense>}>
          </Route>

          <Route exact path='/ncism' element={
            <Suspense fallback={<Loader />}>
              <Ncism />
            </Suspense>}>
          </Route>

          <Route exact path='/affilation' element={
            <Suspense fallback={<Loader />}>
              <Affilation />
            </Suspense>}>
          </Route>

          <Route exact path='/vc-registrar' element={
            <Suspense fallback={<Loader />}>
              <ViceChancellor />
            </Suspense>}>
          </Route>

          <Route exact path='/registrar' element={
            <Suspense fallback={<Loader />}>
              <Registrar />
            </Suspense>}>
          </Route>

          <Route exact path='/Gallery' element={
            <Suspense fallback={<Loader />}>
              <Gallery />
            </Suspense>}>
          </Route>

        </Routes>
        <Whatsapp />
        <Footer />


      </Router>
    </>
  )
}

export default App