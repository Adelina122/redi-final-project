import React from "react";
import '../App.css';

export default function TitleElement(props) {
    return <div>
        <h1 className="title-element">{props.name}</h1>
    </div>;
}
