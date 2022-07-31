import { useSelector,useDispatch } from "react-redux"
import { ordered } from "../features/cake/cakeSlice"
import { restocked } from "../features/cake/cakeSlice"
import { useState } from "react"
export function CakeContainer(){
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [count,setCount] = useState(1)
    return(
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick = {()=>dispatch(ordered())}>Order cake</button>
            <div>
                <input type='number' value={count} onChange={e=>setCount(parseInt(e.target.value))}/>
            </div>
            <button onClick={()=>dispatch(restocked(count))}>Restock {!count?1:count} cake</button>
        </div>
    )
}