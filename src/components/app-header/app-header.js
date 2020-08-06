import React from "react";
import "./app-header.css";

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Vladislav Babin</h1>
            <h2>{allPosts} notes, {liked} like</h2>
        </div>
    )
}

export default AppHeader;