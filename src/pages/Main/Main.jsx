/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./Main.css";

const axios = require("axios");

const Main = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const config = {
            method: "get",
            url: "https://ourhappyspace.herokuapp.com/allnews",
            headers: {},
        };

        axios(config)
            .then((response) => {
                console.log(response.data);
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="news">
            {articles.map((article, index) => (
                <NewsCard
                    key={index}
                    title={article.title}
                    time={article.publishedAt}
                    image={article.urlToImage}
                    description={article.description}
                    sourceName={article.source.name}
                    sourceUrl={article.url}
                    author={article.author}
                />
            ))}
        </div>
    );
};

export default Main;
