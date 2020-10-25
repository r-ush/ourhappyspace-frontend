/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import { Typography } from "antd";
import React, { useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./SearchResult.css";

const Main = () => {
    const [articles] = useState(JSON.parse(localStorage.getItem("searchData")));

    return (
        <React.Fragment>
            <Typography.Title
                style={{
                    color: "#f9f9f9",
                    textAlign: "center",
                    margin: "2rem",
                }}
            >
                Search Results!
            </Typography.Title>
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
        </React.Fragment>
    );
};

export default Main;
