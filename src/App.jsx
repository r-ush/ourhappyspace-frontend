import React from "react";
import Navbar from "components/Navbar/Navbar";
import Main from "pages/Main/Main";
import SearchResult from "pages/SearchResult/SearchResult";
import { Route, useHistory } from "react-router-dom";

const App = () => {
    const history = useHistory();
    if (localStorage.getItem("searchData") !== null) {
        history.push("/search");
    }
    console.log("loaded");
    // localStorage.setItem("searchData", [{}]);

    return (
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/search" component={SearchResult} />
        </div>
    );
};

export default App;
