import {FC, useEffect} from "react";
import {PageIndex} from "./pages/index";
import { useAppDispatch } from "./redux/hooks";
import { fetchChat } from "./redux/messageSlice";

const App:FC = () => {
  
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(fetchChat())
  }, [dispatch])

  return (
    <div>
      <PageIndex />
    </div>
  );
}

export default App;
