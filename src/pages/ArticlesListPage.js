import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <React.Fragment>{/* React.Fragment Shorhand <></> */}
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </React.Fragment>
);

export default ArticlesListPage;