import styles from '@/app/component/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/images/noavatar.png" alt='' fill/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="johndoe@gmail.com"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+1234567"/>
          <label>Address</label>
          <textarea name="address" placeholder="New York"></textarea>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <div className={styles.buttonholder}><button>Update</button></div>
          
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage