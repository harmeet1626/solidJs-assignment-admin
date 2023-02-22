import { createResource } from "solid-js"

const userDetails=()=>{
    const fetchUser= async()=>await (
        await fetch(`https://dummyjson.com/users/1`)
      ).json();
    const [user]=createResource(fetchUser)
    return(
        <>
        <p>This is userdetails</p>
        </>
    )
}
export default userDetails