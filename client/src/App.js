import './styles/App.css';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Blog</h1>
        <BlogPosts/>
      </header>
    </div>
  );
}

export default App;
