import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Page from './Page';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}>
        <Route index element={<Homepage/>}/>
        <Route path="booking" element={<BookingPage/>}/>
        <Route path='loginpage' element={<Login/>} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
