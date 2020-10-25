/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./Main.css";

const axios = require("axios");

const Main = () => {
    const [articles, setArticles] = useState([]);
    const [happyMode, setHappyMode] = useState();

    useEffect(() => {
        function checkUsetData() {
            const item = localStorage.getItem("happyMode");
            console.log("checking for happyMode");
            if (item) {
                setHappyMode(item);
            }
        }

        window.addEventListener("storage", checkUsetData);

        return () => {
            window.removeEventListener("storage", checkUsetData);
        };
    }, []);

    useEffect(() => {
        console.log("happy mode", happyMode);
        if (happyMode) {
            const config = {
                method: "get",
                url: "https://ourhappyspace.herokuapp.com/positivenews",
                headers: {},
            };

            return axios(config)
                .then((response) => {
                    console.log("Happy news:>>", response.data);
                    return setArticles(response.data.articles);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        const configAllNews = {
            method: "get",
            url: "https://ourhappyspace.herokuapp.com/allnews",
            headers: {},
        };

        return axios(configAllNews)
            .then((response) => {
                console.log(response.data);
                return setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [happyMode]);

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
