import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
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
                        <button title='Deletar comentário' >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Pedro, parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}