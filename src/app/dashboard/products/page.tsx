import Pagination from '@/app/component/dashboard/pagination/pagination'
import Search from '@/app/component/dashboard/search/search'
import styles from '@/app/component/dashboard/products/products.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a product..."/>
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created at</td>
          <td>Stock</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/images/noproduct.jpeg" alt="" width={40} height={40} className={styles.productImage}/>
              IPhone
            </div>
          </td>
          <td>
            Desc
          </td>
          <td>
            $999
          </td>
          <td>
            04.02.2024
          </td>
          <td>
            72
          </td>
          <td>
            <div className={styles.buttons}>              
              <Link href="/dashboard/products/12345">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <Link href="/dashboard/products/12345">
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </Link>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/images/noproduct.jpeg" alt="" width={40} height={40} className={styles.productImage}/>
              LG Monitor
            </div>
          </td>
          <td>
            Desc
          </td>
          <td>
            $150
          </td>
          <td>
            03.02.2024
          </td>
          <td>
            35
          </td>
          <td>
            <div className={styles.buttons}>              
              <Link href="/dashboard/products/67890">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <Link href="/dashboard/products/67890">
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default ProductsPage
