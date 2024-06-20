import React, { useState } from "react";


export function Form() {

    const [name, setText] = useState()
    const [gender, setGender] = useState()
    const [course, setSelect] = useState([])
    const [city, setCity] = useState()

    const select = 
        (e) =>{
        
        if (e.target.checked)
            setSelect([...course, e.target.value])

        else {
            const updatedArr = course.filter(
        (cc) => {
                if (cc != e.target.value)
                    return cc
            }
            )
        setSelect(updatedArr)
    }

}

// function Submit(){
//     return(
//         <>
//         <Form/>
//         </>
//     )
// }

return (
    <>

        <form className="form">

            Name :  <input type="text" placeholder="Name" onChange={(e) => {
                setText(e.target.value)
            }} /> <br /><br />

            Choose Gender:  <br /><br />
            <input type="radio" name="male" value='You selected male' onChange={(e) => {
                setGender(e.target.value)
            }} />Male
            <br /><br />

            <input type="radio" name="male" value='You selected female' onChange={(e) => {
                setGender(e.target.value)
            }} />Female
            <br /><br />


            Select Your branches: <br /><br />
            <input type="checkbox" value='You selected diploma' onClick={select} />diploma<br /><br />
            <input type="checkbox" value='You selected degree' onClick={select} />degree<br /><br />
            <input type="checkbox" value='You selected bsc'  onClick={select} />BSC<br /><br />
            <input type="checkbox" value='You selected BCOM' onClick={select} />Mtech<br /><br />




            <select onClick={(e) =>{
                setCity(e.target.value)
            }}>
                <option>select your city</option>
                <option>Kashti</option>
                <option>Shrigonda</option>
            </select>

            


        </form>

        {name} <br></br>

        {gender} <br></br>

        {course} <br></br>

        {city} <br></br>

    </>

)
}