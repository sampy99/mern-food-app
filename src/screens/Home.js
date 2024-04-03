import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousel from '../components/Caraousel'

export default function Home() {

    const [foodCat, setfoodCat] = useState([]);
    const [foodData, setfoodData] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/jason'
            }
        });

        response = await response.json();
        setfoodData(response[0])
        setfoodCat(response[1])
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <div> <Navbar /> </div>
            <div><Caraousel /></div>
            <div className='container'>
                {
                    foodCat !== []
                    ? foodCat.map((data) => {
                        return(
                        <div>Hello World<div/>
                        )
                    }) 
                    : ""
                }
                <Card />
            </div>

            <div> <Footer /> </div>
        </div>
    )
}



