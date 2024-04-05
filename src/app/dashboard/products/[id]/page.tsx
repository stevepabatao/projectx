import styles from '@/app/component/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/images/noproduct.jpeg" alt='' fill/>
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IPhone"/>
          <label>Email</label>
          <input type="number" name="email" placeholder="$00.00"/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder="100"/>
          <label>Color</label>
          <input type="text" name="color" placeholder="red"/>
          <label>Size</label>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea  name="description" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage