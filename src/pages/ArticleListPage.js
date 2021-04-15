import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <React.Fragment>{/* React.Fragment Shorhand <></> */}
        <h1>Articles</h1>
        {articleContent.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </React.Fragment>
);

export default ArticlesListPage;