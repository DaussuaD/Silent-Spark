import React from 'react'
import logo from '../assets/img/logo.png'
import google from '../assets/img/google.png'

const Signin = () => {
  return (
    <div>
      
      <section className="Login">
      <div className="login-right">
        <div className="row">
          <div className="col-lg-6">
            <img src={logo} className="img" alt="Logo" />
            <h2>Welcome to SilentSpark</h2>
            <p>Belajar dan Mengajar Bahasa Isyarat Praktis, Dimanapun dan Kapanpun</p>
          </div>
        </div>
      </div>
      
      <div className="login-left w-50 h-100">
        <div className="row">
          <div className="col-6">
            <div className="header">
              <h1>Daftarkan Akun Anda</h1>
              <p>Belajar atau mengajar bahasa isyarat jadi lebih seru dan mudah. Yuk, gabung di kelas bahasa isyarat sekarang juga!</p>
            </div>
            <div className="login-form">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nama lengkap anda</label>
                <input type="text" className="form-control" id="username" placeholder="Nama lengkap anda"  autoComplete="name" />
                
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Masukkan email anda" autoComplete="email"/>
                
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Masukkan password anda" autoComplete="new-password" />
                
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Ingat saya</label>
                </div>
                
                <button className="signin">Daftar</button>
                
                <button className="signin-google">
                  <img src={google} className="signin-img" alt="Google Logo" />
                  Login dengan Google
                </button>
                
                <div className="text-center">
                  <span className="d-inline">Apakah akun sudah terdatar? 
                    <a href="/loginpages" className="d-inline text-decoration-none">Masuk</a>
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

export default Signin
