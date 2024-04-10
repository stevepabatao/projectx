import Pagination from '@/app/component/dashboard/pagination/pagination'
import Search from '@/app/component/dashboard/search/search'
import styles from '@/app/component/dashboard/products/products.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { fetchProducts } from "@/app/lib/data"

const ProductsPage = async ({ searchParams }) => {

  const q = searchParams?.q || ""
  const page = searchParams?.page || 1

  const { count, products }  =  await fetchProducts(q, page);

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
        { products.map((product) => (
          <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image src={ product.img || "/images/noproduct.jpeg" } alt="" width={40} height={40} className={styles.productImage}/>
                { product.title }
              </div>
            </td>
            <td>
              { product.desc }
            </td>
            <td>
              { product.price }
            </td>
            <td>
              { product.createdAt.toString().slice(4,16) }
            </td>
            <td>
              { product.stock }
            </td>
            <td>
              <div className={styles.buttons}>              
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination count={count}/>
  </div>
  )
}

export default ProductsPage
