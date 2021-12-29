import { useNavigate } from 'react-router-dom';
import '../sass/Home.scss'

export function Home() {
    const navigate = useNavigate();

    const naveToList = () => {
        navigate('/films')
    }

    return (
        <div className="container-main">
            <div className="container">
                <span>Studio Ghibli Film List</span>
                <button onClick={() => naveToList()}>Go to list</button>
            </div>
        </div>
    );
}