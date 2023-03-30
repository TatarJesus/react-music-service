import styles from './MainBlock.module.css';
import Header from './Header/Header';
import MyLibraryAuthors from './Header/MainElements/MyLibrary/Authors/MyLibraryAuthors';


const MainBlock = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.main}>
        <MyLibraryAuthors/>
      </div>
    </div>
  )
}

export default MainBlock