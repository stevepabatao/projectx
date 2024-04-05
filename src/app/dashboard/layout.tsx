import Navbar from "../component/dashboard/navbar/navbar"
import Sidebar from "../component/dashboard/sidebar/sidebar"
import styles from "../component/dashboard/dashboard.module.css"
import Footer from "../component/dashboard/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout