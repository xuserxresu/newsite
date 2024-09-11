import React from 'react';
import { Link } from 'react-router-dom';
import './BytesAndThoughts.css';

function BytesAndThoughts() {
  const samplePosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      date: "May 15, 2024",
      excerpt: "As we move further into the digital age, cloud computing continues to evolve at a rapid pace. In this post, we'll explore the emerging trends that are shaping the future of cloud technology...",
      author: "Ahmed Sharfi",
      tags: ["Cloud Computing", "Technology Trends", "IT Infrastructure"],
      link: "/blog/future-of-cloud-computing"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      date: "April 28, 2024",
      excerpt: "Small businesses are increasingly becoming targets for cyberattacks. Learn about the essential cybersecurity practices that can help protect your business from potential threats...",
      author: "Ahmed Sharfi",
      tags: ["Cybersecurity", "Small Business", "IT Security"],
      link: "/blog/cybersecurity-best-practices"
    }
  ];

  return (
    <div className="bytes-and-thoughts fade-in">
      <h1>Bytes & Thoughts</h1>
      <p className="intro">Welcome to my tech blog! Here, I share insights, tips, and musings about the ever-evolving world of IT.</p>
      
      <div className="blog-posts">
        {samplePosts.map(post => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-author">by {post.author}</span>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <Link to={post.link} className="read-more">
              <span>Read More</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BytesAndThoughts;