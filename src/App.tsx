import { Post, PostProps } from "./components/Post.tsx"
import { Header } from "./components/Header.tsx"
import { Sidebar } from "./components/Sidebar.tsx"

import './global.css'

import styles from './App.module.css'

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/peddroccas.png',
      name: "Pedro Antunes",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Salve pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu gitHub' },
      { type: 'link', content: 'https://github.com/peddroccas' },
    ],
    publishedAt: new Date('2024-04-24 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jah4.png',
      name: "Draven Antunes",
      role: "Front-end Developer"
    },
    content: [
      { type: 'paragraph', content: 'Salve pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu gitHub' },
      { type: 'link', content: 'https://github.com/peddroccas' },
    ],
    publishedAt: new Date('2024-04-24 19:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

