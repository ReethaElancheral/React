
import React from 'react';
import { useParams, Link } from 'react-router-dom';


const PostDetails = () => {
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

  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blog">← Back to Blog List</Link>
    </div>
  );
};

export default PostDetails;
