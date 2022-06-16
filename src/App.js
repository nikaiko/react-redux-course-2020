import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { FetchedPosts } from './components/FetchedPosts';

function App() {
    return (
        <div className="container">
            <div className="row">
                <PostForm />
            </div>
            <div className="row">
                <div className="col">
                    <h2>Posts</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2>Fetched Posts</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
}

export default App;
