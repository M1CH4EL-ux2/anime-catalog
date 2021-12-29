import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import '../sass/Film.scss'

export function Film() {
    const { id } = useParams();

    const [data, setData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
        const dataResponse = await response.json();
        setData(dataResponse)
    }, [])

    console.log(data)

    return (
        <div className="container-film">
            <img src={data.image} />

            <div className="content">
                <h1>{data.title}</h1>
                <h2>{data.director}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
} 