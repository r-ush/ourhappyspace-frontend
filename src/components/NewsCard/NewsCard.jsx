/* eslint-disable react/prop-types */
import React from "react";
import randomColor from "../../utils/randomColor";
import "./NewsCard.css";

const NewsCard = ({
    title,
    image,
    description,
    time,
    sourceName,
    sourceUrl,
    author,
}) => {
    return (
        <div className="news-card" style={{ backgroundColor: randomColor() }}>
            <img className="news-img" src={image} alt="news-img" />
            <div className="news-card-text">
                <div className="news-title">{title}</div>
                <div className="news-title">-{author}</div>
                <div>{description}</div>
                <div className="news-card-footer">
                    {time}
                    <br />
                    <br />
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={sourceUrl}
                    >
                        View here at {sourceName}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
