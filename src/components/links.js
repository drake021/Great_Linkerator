import React, { useEffect, useState } from 'react';
import {fetchLinks, createNewLink } from '../api/index.js';

const Links = () => {
    const [linkList, setLinkList] = useState([]);

    const [link, setLink] = useState('');
    const [tags, setTags] = useState('');
    const [comment, setComments] = useState('');

    useEffect(() => {
        fetchLinks().then(links => {
            setLinkList(links)
        })
            .catch(error => {
            });
    }, []);

    const submitNewLink = () => {
        return <div id="submit-main">
            <header>
                <h3>Add A Link To The Linkerator</h3>
            </header>
            <form id="submit" onSubmit={async (event) => {
                event.preventDefault();
                alert("Link Created!");
                try {
                    await createNewLink(link, tags, comment);
                } catch (error) {
                    console.error(error);
                }

            }}>
                <label id="name-label">Link</label>
                <input
                    id="link-title"
                    type="text"
                    placeholder="enter link..."
                    value={link}
                    onChange={function (e) {
                        setLink(e.target.value)
                    }}
                />
                <label id="tags-label">Tags</label>
                <input
                    id="link-tag"
                    type="text"
                    placeholder="enter tags..."
                    value={tags}
                    onChange={function (e) {
                        setTags(e.target.value)
                    }}
                />
                <label id="comments-label">Comments</label>
                <input
                    id="link-comments"
                    type="text"
                    placeholder="enter comments..."
                    value={comment}
                    onChange={function (e) {
                        setComments(e.target.value)
                    }}
                />
                <button id="submit-button">Submit</button>
            </form>
        </div>
    }





return (

    <div id="links-main">
        <h1>The Great Linkerator</h1>
        {linkList.map(({ id, link, clicks, tags, comment }) => (
            <div key={id} id="links">
                <h3 >Link {link}</h3>
                <p>Clicks {clicks}</p>
                <p>Tags {tags}</p>
                <p>Comment {comment}</p>
            </div>
        ))}
    </div>
);
}

export default Links;