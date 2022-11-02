import "./App.css";
import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
