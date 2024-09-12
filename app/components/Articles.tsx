import React from 'react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a
                href={`/articles/${article.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;