import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Page from './Page';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}>
        <Route index element={<Homepage/>}/>
        <Route path="booking" element={<BookingPage/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
