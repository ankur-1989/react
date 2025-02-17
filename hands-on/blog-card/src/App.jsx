import BlogCard from './components/BlogCard';

export default function App() {
    return (
        <div className="App">
        <BlogCard title="A random Image" description="React Blog Card component" author="Ankur Gupta" imageUrl={"https://picsum.photos/200/300"}/>
        </div>
    );
}