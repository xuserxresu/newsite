import React from 'react';
import { Link } from 'react-router-dom';
import './BytesAndThoughts.css';

function BytesAndThoughts() {
  const samplePosts = [


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