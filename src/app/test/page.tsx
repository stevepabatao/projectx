
const handleForm = async (formData) => {
    "use server"

    const username = formData.get("username")

    console.log(formData);
    console.log("Hello ", username);

}

const Page = () => {
  return (
    <div>
        <form action={handleForm}>
            <input type="text" name="username"/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Page