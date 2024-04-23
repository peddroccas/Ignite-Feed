import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro"
            content="loren"
          />
          <Post
            author="Santos"
            content="loren123124"
          />
        </main>
      </div>
    </div>
  )
}

