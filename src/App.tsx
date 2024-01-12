import styles from './app.module.scss'
import { Ocean } from './components'
export const App = () => {
  return (
    <main className={styles.home}>
      <header>
        <h1 className={styles.logo}>NEAL.FUN</h1>
      </header>
      <div className={styles.wellcome}>
        <div className={styles.wellcome_title}>
          <h1>The Deep Sea</h1>
          <p>Made with love by Neal Agarwal</p>
        </div>
      </div>
      <Ocean />
    </main>
  )
}
