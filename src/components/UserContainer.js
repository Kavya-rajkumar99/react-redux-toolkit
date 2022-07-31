import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers } from "../features/user/userSlice"
export function UserContainer(){
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(fetchUsers())
    },[])
    return(
        <div>
            <h2>List of users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error : {user.error}</div> :
            <ul>
                {user.users.map(user=><li key={user.id}>{user.name}</li>)}
            </ul>
            }
        </div>
    )
}