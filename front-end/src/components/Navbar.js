import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';
import stars from '../assets/qs-stars.png'
import { NavLink, Link, useHistory } from "react-router-dom";
import { useGlobalContext } from '../context';
import {
  FaBars,
  FaCogs,
  FaList,
  FaShoppingCart,
  FaTable,
  FaTimes,
  FaUser,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
const Navbar = () => {
  
  const history = useHistory();
  const { user, logoutUser } = useGlobalContext();
  return (
    <section className='section-center' style={{fontSize:'14px', margin:'0 100px'}}>

    {/* <nav class="navbar navbar-light bg-light">
      <div class="container-fluid" style={{justifyContent:'flex-end'}}>
        <span><i class="flag flag-us"></i></span>
        <span><i class="flag flag-vn"></i></span>
        <div style={{float:'right'}}>
          <img src={stars} style={{width:'115px', height:'auto'}}/>
        </div>
        </div>
    </nav> */}

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
    <a class="navbar-brand">
            <Link to='/' className='home-link'>
          <img src={logo} alt='jobs app' className='logo' height={72}/>
        </Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Giới thiệu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to='/gioithieu'>Tổng quan UEF</Link></a></li>
            <li><a class="dropdown-item"><Link to='/thong-tin-tuyen-sinh'>Logo UEF</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Sứ mạng đào tạo</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Cơ cấu tổ chức</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Mô hình đào tạo</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Các ngành đào tạo</Link></a></li>
            <li><a class="dropdown-item"><Link to='/hocphi'>Đối tác đào tạo</Link></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to='/themanh'>Thế mạnh</Link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tuyển sinh
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to='/huongnghiep'>Hướng nghiệp</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tin-tuyen-sinh'>Thông tin tuyển sinh</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Tư vấn tuyển sinh</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Cẩm nang tuyển sinh</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Kết quả tuyển sinh</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Câu hỏi thường gặp</Link></a></li>
            <li><a class="dropdown-item"><Link to='/hocphi'>Học phí & Học bổng</Link></a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ngành đào tạo
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to='/cntt'>Công nghệ thông tin</Link></a></li>
            <li><a class="dropdown-item"><Link to='/bds'>Bất động sản</Link></a></li>
            <li><a class="dropdown-item"><Link to='/tu-van-tuyen-sinh'>Tư vấn tuyển sinh</Link></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/vqt'>Viện quốc tế</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/dn'>Doanh nghiệp</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/vstep'>Vstep</Link></a>
        </li>
        {user && user.role === "admin" ? (
            <>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Management
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/news-management"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Bài viết
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/users-management"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Người dùng
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          ) : null}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link to='search'><button class="btn btn-outline-success" type="submit">Search</button></Link>
        
      </form>
          <div className='cart-btn-wrapper'>
      {!user ? (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="auth-btn">
                  Login <FaUser />
                </button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="auth-btn">
                  Register <FaUserPlus />
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                className="auth-btn"
                onClick={() => {
                  logoutUser();
                  history.push("/dashboard");
                }}
              >
                Logout
                <FaUserMinus />
              </button>
              </>
          )}
    </div>
        </div>
    
  </div>
    </nav>
    </section>
  );
};



export default Navbar;
