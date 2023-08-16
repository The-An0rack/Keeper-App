import React from "react";

function Note(data) {
    return <div className = "note">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
    </div>
}

export default Note;