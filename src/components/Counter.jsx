import {useSelector,useDispatch} from "react-redux"
import { counterAction } from "../store/index";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const isShow = useSelector((state) => state.isShow);

    const increaseHandler=() =>{ 
        dispatch(counterAction.increase())
    };
    const increaseBy5Handler=()=>{
        dispatch(counterAction.increaseBy5(5))
    }
    const decreaseHandler=() =>{ 
        dispatch(counterAction.decrease())
    };
    const toggleHandler=()=>{
        dispatch(counterAction.toggle())
    };

  return (

   <section>
        <h3>Redux Counter</h3>
        {
            isShow && <h1>{counter}</h1>
        }
        <hr />
       <div>
       <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseBy5Handler}>IncreaseBy5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>Toggle-counter</button>
       </div>
        

   </section>
  )
}

export default Counter