import styles from '@/app/component/login/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login