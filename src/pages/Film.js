import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import '../sass/Film.scss'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

export function Film() {
    const [data, setData] = useState([]);
    const [size, setSize] = useState(false);
    const { id } = useParams();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
        const dataResponse = await response.json();
        setData(dataResponse)
    }, [id])

    const sizing = useWindowDimensions()
    useEffect(() => {
        if(sizing.width >= 700) {
            setSize(true)
        }
    }, [sizing.width])

    console.log(data)

    return (
        <div className="container-film">
            <img src={size ? data.movie_banner : data.image} alt={data.title} />

            <div className="content">
                <h1>{data.title}</h1>
                <h2>{data.director}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
} 