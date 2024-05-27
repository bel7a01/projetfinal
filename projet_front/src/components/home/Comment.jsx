import style from './Comment.module.css';
import { useEffect, useState } from 'react';
import Avis from './Avis.jsx';
import { toast } from "react-toastify";

function Comment() {
    const [comments, setComment] = useState("");
    const [username, setUser] = useState("");
    // const [comments, setComments] = useState([]); // State to hold the list of comments
    const [loading, setLoading] = useState(true)


    const [commentList, setCommentList] = useState([]); // State to hold the list of comments

    useEffect(() => {
        if (loading) {
            fetchComments();
            setLoading(false);

        }

    }, [loading]);

    const fetchComments = async () => {
        try {
            const response = await fetch("http://localhost:3000/comments");
            const data = await response.json();
            setCommentList(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };


    function createComment(e) {
        e.preventDefault();
        let newComment = { comments, username };

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment) // Correct the body to send newComment
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error(data.message);
                } else {
                    toast.success("Created a new comment " + username);
                    setComment("");
                    setUser("");
                    setLoading(true);
                }
            })
            .catch(error => {
                console.error("Error creating comment:", error);
                toast.error("Failed to create comment");
            });
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                <div className={style.username}>
                    <input
                        className={style.usernames}
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className={style.comment}>
                    <input
                        className={style.comments}
                        placeholder='Write your comment'
                        value={comments} // Bind input value to state
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button
                    type='button'
                    className={style.button}
                    onClick={createComment}
                >
                    Commenter
                </button>
            </div>
            <div className={style.list}>
                {commentList.map((comment, index) => (
                    <Avis key={index} text={comment.comments} user={comment.username} />
                ))}
            </div>
        </div>
    );
}
export default Comment;