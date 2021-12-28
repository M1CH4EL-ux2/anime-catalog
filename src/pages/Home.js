import React from 'react';
import '../sass/Home.scss'

export function Home() {
    return (
        <div className="container-main">
            <div className="container">
                <header>
                    Cat.Anime
                </header>
                <form>
                    <div className="input-form">
                        <input className="form-fild" name="email" type="email" placeholder='Email' />
                        <label className="form-label">Email</label>
                    </div>
                    <div className="input-form">
                        <input className="form-fild" name="password" type="password" placeholder="Senha" />
                        <label className="form-label">Email</label>
                    </div>
                    
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}