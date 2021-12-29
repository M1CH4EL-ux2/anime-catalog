import {useState} from 'react';
import '../sass/Home.scss'

export function Home() {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)
    }

    return (
        <div className="container-main">
            <div className="container">
                <header>
                    Cat.Anime
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="input-form">
                        <input className="form-fild" name="email" type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <label className="form-label">Email</label>
                    </div>
                    <div className="input-form">
                        <input className="form-fild" name="password" type="password" placeholder="Senha" value={password} onChange={e => setpassword(e.target.value)} />
                        <label className="form-label">Password</label>
                    </div>
                    
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}