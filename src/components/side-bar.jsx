"use client";


import Link from "next/link";
// import logoImage from "@/app/(web)/assets/images/logo.avif"


const SideBar = () => {



  return (
    <section className="main-menu-sec">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-7 col-lg-8 col-xl-8">
                <nav className="navigation">
                    <ul>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/about">ABOUT US</Link></li>
                        <li className="hover-parent position-relative">
                            <Link href="/services">SERVICES</Link>
                            <ul className="sub-menu">
                                <li className="active"><Link href="#">Mobile Application</Link>
                                    <ul className="sub-child active">
                                        <li><Link href="#">iOS App Development</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="show-mobile"><Link href="/careers">CAREERS</Link></li>
                        <li><Link href="/work">WORK</Link></li>
                        <li className="#"><Link href="#">BLOG</Link></li>
                        <li><Link href="/contact-us">CONTACT US</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="col-12 col-md-5 col-lg-2 col-xl-2">
                <ul className="menu-info">
                    <li>
                        <div className="box">
                            <h6>Give Us a Call</h6>
                        </div>
                        <div className="box">
                            <h6>              
                              <Link href="tel:+1 281-849-1614">+1 281-849-1614</Link>
                            </h6>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <h6>Let’s Discuss</h6>
                        </div>
                        <div className="box">
                            <h6>
                              <Link href="mailto:contact@prestige-it.com">contact@prestige-it.com</Link>
                            </h6>
                        </div>
                    </li>
                </ul>
                {/* <ul className="social-list">
                    <li><a target="_blank" href="https://www.facebook.com/Bytrixtechnologies/"><i class="fa fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/bytrixtech"><i class="fa fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/company/bytrix-technologies/"><i class="fa fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/bytrix.technologies/"><i class="fa fa-instagram"></i></a></li>
                </ul> */}
            </div>
        </div>
    </div>
    </section>
  );
};

export default SideBar;
