import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div class="container-fluid">
            <Link to={"http://localhost:5173/"} class="navbar-brand fw-bold" href="#">Bank Account Management System</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:5173/">Home</a>
                </li>
                <li class="nav-item">
                <a type="button" class="btn btn-primary" href="http://localhost:5173/login">Login</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
