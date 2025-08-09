import {useContext} from "react";
import { Data, Data1 } from '../App.jsx'

const ComponentC = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);

    return (
      <div>
          <h1>My Name is {userName} and I'm {Age} years old.</h1>
      </div>
    )
}
export default ComponentC
