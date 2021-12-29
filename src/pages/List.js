import { useEffect, useState } from "react";

import '../sass/List.scss'

export function List() {
    const [data, setData] = useState([])
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const dataResponse = await response.json();

        setData(dataResponse)
    }, [])

    console.log(data)
    return (
        <div className="container-list">
           {
               data.map(items => {
                   return <div className="item">
                       <img src={items.movie_banner} />
                       <h2>{items.title}</h2>
                   </div>
               })
           }
        </div>
    );
}