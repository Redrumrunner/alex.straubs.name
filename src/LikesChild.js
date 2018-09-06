import React from 'react';

export default function LikesChild(props){
    return (
        <div className="card">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}