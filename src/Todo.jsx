import { useSelector,useDispatch } from "react-redux";
import { fetchTodo } from "./redux/todoSlicer";
import { useEffect } from "react";

const Todo = () =>{
    const data = useSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(fetchTodo())
    },[])
    console.log(data)

    return(
        <div>
            {data.isLoading ? <h1>Loading....</h1> : 
              data.data.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
              })}
        </div>
    )
}
export default Todo