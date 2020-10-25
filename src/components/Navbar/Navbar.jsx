import React, { useEffect, useState } from "react";
import { Button, Switch, Typography } from "antd";
import Search from "antd/lib/input/Search";

import { SearchOutlined, SmileOutlined } from "@ant-design/icons";

import "./Navbar.css";
import randomColor from "utils/randomColor";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showTextBox, setShowTextBox] = useState(false);
    const onSearch = (value) => {
        console.log(value);
    };

    useEffect(() => {
        console.log("ueff");
        const width = window.innerWidth;
        if (width < 790) {
            setIsMobile(true);
        }
    }, []);

    return (
        <div className="nav">
            {!showTextBox ? (
                <Typography.Title
                    className="logo"
                    style={{ color: randomColor() }}
                >
                    {!isMobile ? "The Happy Space" : "THS"}
                </Typography.Title>
            ) : null}
            <Switch
                checkedChildren={<SmileOutlined />}
                unCheckedChildren={<SmileOutlined rotate={180} />}
                size="large"
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
