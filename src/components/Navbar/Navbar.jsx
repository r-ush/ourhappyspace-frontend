import React, { useEffect, useState } from "react";
import { Button, Switch, Typography } from "antd";
import Search from "antd/lib/input/Search";

import { SearchOutlined, SmileOutlined } from "@ant-design/icons";

import "./Navbar.css";
import randomColor from "utils/randomColor";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showTextBox, setShowTextBox] = useState(false);

    const history = useHistory();

    const onSearch = (value) => {
        console.log(value);
        const data = {
            topic: value,
        };
        const config = {
            method: "post",
            url: "https://ourhappyspace.herokuapp.com/search",
            headers: {},
            data,
        };

        Axios(config)
            .then((response) => {
                console.log(response.data.positive);
                localStorage.setItem(
                    "searchData",
                    JSON.stringify(response.data.positive)
                );
            })
            .then(() => {
                history.push("/search");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const width = window.innerWidth;
        if (width < 790) {
            setIsMobile(true);
        }
        localStorage.setItem("happyMode", true);
    }, []);

    const onChange = (checked) => {
        if (checked) {
            localStorage.setItem("happyMode", true);
            return history.push("/");
        }
        localStorage.setItem("happyMode", false);
        return history.push("/");
    };

    return (
        <div className="nav">
            {!showTextBox ? (
                <Typography.Title
                    className="logo"
                    style={{ color: randomColor() }}
                    onClick={() => {
                        localStorage.removeItem("searchData");
                        history.push("/");
                    }}
                >
                    {!isMobile ? "Our Happy Space" : "OHS"}
                </Typography.Title>
            ) : null}
            <Switch
                checkedChildren={<SmileOutlined />}
                unCheckedChildren={<SmileOutlined rotate={180} />}
                size="large"
                onChange={onChange}
                defaultChecked
            />
            {!isMobile ? (
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    loading={false}
                    onSearch={onSearch}
                    className="searchbox"
                />
            ) : (
                <div>
                    {showTextBox ? (
                        <Search
                            placeholder="What's new?"
                            onSearch={onSearch}
                            enterButton
                        />
                    ) : (
                        <Button
                            type="primary"
                            onClick={() => setShowTextBox(true)}
                        >
                            <SearchOutlined />
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
