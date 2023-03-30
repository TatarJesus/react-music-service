import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1 style={{marginLeft: '35px'}}>Моя библиотека \ Плейлисты</h1>
      </div>
      <div className={styles.user}>
        <div className={styles.userProfile}>
          <img src="https://dl.dropboxusercontent.com/s/38z6kyypcafp3z9/3818.jpg?dl=0" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header