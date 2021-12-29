import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../sass/List.scss'

export function List() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const dataResponse = await response.json();
        setData(dataResponse)
    }, [])

    const nave = (local) => {
        navigate(`/films/${local}`)
    }

    console.log(data)
    return (
        <div className="container-list">
           {
               data.map(items => {
                   return <div key={items.id} onClick={() => nave(items.id)} className="item">
                       <img src={items.movie_banner} alt={items.title} />
                       <h2>{items.title}</h2>
                   </div>
               })
           }
        </div>
    );
}