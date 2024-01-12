import { useState,useEffect } from 'react'
import './App.css'

const Counter = () =>{

    const [count, setCount] = useState(0)

    const changecount = () => {
        setCount(count+1)
    }

useEffect(()=>{
    document.title = `${count} times clicked`;
},[count])

    return(
        <div>
            <button onClick={changecount}>
                Change Counter {count} times clicked
            </button>
            <div className="title"><h1>My Identity</h1></div>
        </div>

    )
}
const Identity = (props) => {
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.npm}</li>
                <li><a href={props.github}>My Github</a></li>
            </ul>
        </div>
    )
    
}

const InputName = () =>{
    const[nama,setNama] = useState('')
    const handleSetNama = (e) =>{
        setNama(e.target.value)
    }
    const Print = () =>{
        console.log(nama.length)
        if(nama.length==0){
            alert("Hello Default Name!")
        }else{
            alert("Hello "+nama+"!")
        }
    }
    return(
        <div>
            <div><input type="text" onChange={handleSetNama}/></div>
            <button onClick={Print}>
                Submit
            </button>
        </div>
    )
}


const BgColor = () =>{
    const ChangeColorButton = () => {
        const body = document.querySelector('body')
        body.style.background = RandomColor()
    }

    const RandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return(

            color
        );
    };

    return (
        <div>
            <button className="butoncolor" onClick={ChangeColorButton}>Change background to random color</button>
        </div>
    );
}

export {
    Counter,
    Identity,
    InputName,
    BgColor,
}