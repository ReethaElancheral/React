

import { Link } from 'react-router-dom';

const BlogList = () => {

    const blogPosts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is the very first post on my personal blog site! Stay tuned for more updates and tutorials.",
  },
  {
    id: 2,
    title: "React Routing Explained",
    content: "React Router lets you handle navigation in React apps. In this post, we explore how to use Routes and Links.",
  },
  {
    id: 3,
    title: "Understanding useEffect",
    content: "The useEffect hook lets you run side effects in functional components. Learn when and how to use it properly.",
  },
];
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blogpost/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            
          </li>
          
        ))}
      </ul>
       <Link to="/projectthree">← Back to Blog</Link>
    </div>
  );
};

export default BlogList;
