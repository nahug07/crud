import styles from './page.module.css'
import Users from './users/Users'
import { UsersProvider } from './contexts/UsersContext'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>CRUD Users</code>
        </p>
        <div>
        <p>
          <code className={styles.code}>Add Users</code>
        </p>
        </div>
      </div>
      <UsersProvider>
        <Users/>
      </UsersProvider>
    </main>
  )
}
