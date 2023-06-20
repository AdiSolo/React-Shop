import { useState } from "react";

function SayHello(){
    const [ age, setAge] = useState(26);
    const changeAge = () => {
        setAge(age + 5);
        console.log(age);
    }

    return(
        <>
            <h1>Hello, Bro! You are {age} ages old.</h1>
            <button onClick={changeAge}>Update age</button>
        </>
    
    );
}

export default SayHello;