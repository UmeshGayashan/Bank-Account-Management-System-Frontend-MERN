import React from 'react'
import { Link } from 'react-router-dom'

export const AccountNavBar = () => {
  return (
    <div>
        <ul class="nav nav-pills justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="http://localhost:5173/AccountManagement">Create Account</a>
  </li>
  <li class="nav-item">
    <a type="button" class="btn btn-success" href="http://localhost:5173/UpdateAccount">Update Account</a>
  </li>
  <li class="nav-item">
    <a type="button" class="btn btn-warning" href="http://localhost:5173/AccountInfo">Account Details</a>
  </li>
<li class="nav-item">
    <a type="button" class="btn btn-secondary" href="http://localhost:5173/TransactionManagement">Transaction Manager</a>
  </li>
  <li class="nav-item">
    <a type="button" class="btn btn-danger"  href="http://localhost:5173">Logout</a>
  </li>
</ul>
    </div>
    // <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
    //     <div class="container-fluid">
    //         <Link to={"http://localhost:5174/AccountManagement"} class="navbar-brand fw-bold" href="http://localhost:5174/AccountManagement">Create Account</Link>
    //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="http://localhost:5174/UpdateAccount">Update Account</a>
    //             </li>
    //             <li class="nav-item">
    //             <a class="nav-link" href="http://localhost:5174/AccountInfo">Account Details</a>
    //             </li>
    //             <li class="nav-item">
    //             <a class="nav-link" href="http://localhost:5174/TransactionManagement">Transaction Manager</a>
    //             </li>
    //             <li>
    //             <a type="button" class="btn btn-danger"  href="http://localhost:5174">Logout</a>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </nav>
  )
}
