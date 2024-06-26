import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/peddroccas.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Antunes</strong>
                            <time title='11 de maio às 8:13' dateTime='2024-25-04' >Publicado há 1hr</time>
                        </div>
                        <button onMouseDown={handleDeleteComment} title='Deletar comentário' >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}