import React from 'react';

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    author: string;
    content: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-left">{post.title}</h1>
        <p className="text-gray-600 mb-6 text-left">{post.date} | by {post.author}</p>
        <div className="prose prose-lg text-left">
          {/* Render your blog post content here */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;