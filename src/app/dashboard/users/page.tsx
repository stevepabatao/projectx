import Pagination from '@/app/component/dashboard/pagination/pagination'
import Search from '@/app/component/dashboard/search/search'
import styles from '@/app/component/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { fetchUsers } from "@/app/lib/data";


const UsersPage = async () => {

  const users  = await fetchUsers();

  console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
          <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image 
                src={user.img || "/images/noavatar.png"} alt="" width={40} height={40} className={styles.userImage}/>
                {user.username}
              </div>
            </td>
            <td>
              {user.email}
            </td>
            <td>
              {user.createdAt?.toString().slice(4,16)}
            </td>
            <td>
              {user.isAdmin ? "Admin" : "Client"}
            </td>
            <td>
              {user.isActive ? "active" : "inactive"}
            </td>
            <td>
              <div className={styles.buttons}>              
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="dashboard/users/{users.id}">
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
      <Pagination/>
    </div>
  )
}

export default UsersPage