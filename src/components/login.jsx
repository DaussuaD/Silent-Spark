import React from 'react'
import logo from '../assets/img/logo.png'
import google from '../assets/img/google.png'
import { AlertLink } from 'react-bootstrap'

const Login = () => {
  return (
    <div>
        <section className="Login">
      <div className="login-right">
        <div className="row">
          <div className="col-lg-6">
            <img src={logo} className="img"  />
            <h2>Welcome to SilentSpark</h2>
            <p>Belajar dan Mengajar Bahasa Isyarat Praktis, Dimanapun dan Kapanpun</p>
          </div>
        </div>
      </div>
      
      <div className="login-left w-50 h-150">
        <div className="row">
          <div className="col-6">
            <div className="header">
              <h1>Welcome to SilentSpark</h1>
              <p>Bersiaplah untuk terhubung, belajar, dan menginspirasi di dalamnya. Mari kita mulai!</p>
            </div>
            <div className="login-form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Masukkan email anda" autoComplete="email" />
                
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Masukkan password anda" autoComplete="current-password" />

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Ingat saya</label>
                </div>
                
                <div>
                  <a href="#" className="text-decoration-none">Lupa password anda?</a>
                </div>
                
                <button className="signin">
                  <AlertLink href="/home" className="text-decoration-none">Login</AlertLink>
                </button>
                
                <button className="signin-google">
                  <img src={google} className="signin-img" alt="Google Logo" />
                  Login dengan Google
                </button>
                
                <div className="text-center">
                  <span className="d-inline">Apakah anda sudah punya akun? 
                    <a href="/signinpages" className="d-inline text-decoration-none">sign up</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Login
