import NavAadmin from '../components/admin/NavAdmin'
import Info from '../components/admin/Info'
import Tableau from '../components/admin/Tableau';
import Avis from '../components/home/Avis'
import style from '../components/home/Comment.module.css'
import image23 from '../assets/icon11.png'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
    const [loading, setLoading] = useState(true);
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
    const deleteComment = async (id) => {
        try {
            await fetch(`http://localhost:3000/comments/${id}`, {
                method: 'DELETE',
            });
            setLoading(true); // Refetch the comments after deletion
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    }
    return (
        <>

            <NavAadmin />
            <Tableau />
            <div className={style.list}>
                {commentList.map((comment, index) => (
                    <div key={index} className={style.commentContainer}>
                        <Avis
                            text={comment.comments}
                            user={comment.username}
                        />
                        <button
                            className={style.butt}
                            onClick={() => deleteComment(comment._id)}
                        >
                            <img src={image23} className={style.imgs}></img>
                        </button>
                    </div>
                ))}
            </div>
            <Info></Info>
            <ToastContainer></ToastContainer>


        </>
    );

}

export default Admin;