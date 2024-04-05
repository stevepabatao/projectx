
import Card from '../component/dashboard/card/card'
import Chart from '../component/dashboard/chart/chart'
import Rightbar from '../component/dashboard/rightbar/rightbar'
import Transactions from '../component/dashboard/transactions/transactions'
import styles from '../component/dashboard/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>

  )
}

export default Dashboard