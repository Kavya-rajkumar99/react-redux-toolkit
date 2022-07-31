import { useSelector,useDispatch } from "react-redux"
import { ordered } from "../features/icecream/icecreamSlice"
import { restocked } from "../features/icecream/icecreamSlice"
import { useState } from "react"
export function IcecreamContainer(){
    const numOfIceCreams = useSelector(state=>state.icecream.numOfIceCreams)
    const [count,setCount] = useState(1)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of icecreams - {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <div>
                <input type='number' value={count} onChange={e=>setCount(parseInt(e.target.value))}/>
            </div>
            <button onClick={()=>dispatch(restocked(count))}>Restock {!count?1:count} icecream</button>
        </div>
    )
}