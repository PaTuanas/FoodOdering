import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import Review from './pages/Review/Review'
import Post from './pages/Post/Post'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/order" element = {<Order/>}/>
          <Route path ="/review" element = {<Review/>}/>
          <Route path ="/post" element = {<Post/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
