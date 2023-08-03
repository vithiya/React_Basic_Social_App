
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import PostPage from './PostPage.js';
import NewPost from './NewPost.js';
import About from './About.js';
import Missing from './Missing.js';
import Footer from './Footer.js';
import Post from './Post.js';
import { Routes,Route, Link } from 'react-router-dom';
import PostLayout from './PostLayout';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newPost">NewPost</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/newPost" element={<NewPost/>}/>
          <Route path="/postpage" element={<PostLayout/>}>
              <Route index element={<PostPage/>}/>
              <Route path=":id" element={<Post/>}/>
              <Route path="newpost" element={<NewPost/>}/>
          </Route>
          
          <Route path="*" element={<Missing/>}/>
      </Routes>
    {/*  <Header />
     <Nav />
     <Home />
     <NewPost />
     <PostPage />
     <About />
     <Missing />
     <Footer /> */}
    </div>
  );
}

export default App;
