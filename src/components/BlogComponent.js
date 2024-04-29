import React from "react";
import '../App.css';

export default function BlogComponent(props) {
    return <div>
    <img src={props.image} className="img-fluid rounded mx-auto blog-image" alt="image"></img>
    <p className="blog-title">{props.title}</p>
    <p className="blog-description">{props.description}</p>
    </div>;
}
