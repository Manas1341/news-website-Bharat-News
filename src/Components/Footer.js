import React from "react";
import { Link } from "react-router-dom";

const Footer =()=> {
    return (
      <div>
        
        <footer className="py-5 bg-dark text-white my-4">
            <div className="row justify-content-center">
                <div className="col-6 col-md-2 mb-3">
                <h5 className="border-bottom">World</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        America
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Europe
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Africa
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Indo-Pacific
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        China
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Australia
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Middle-East
                    </Link>
                    </li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5 className="border-bottom">Sports</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Cricket
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        FootBall
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Tennis
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Chess
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        MotorSports
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Olympics
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Climbing
                    </Link>
                    </li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5 className="border-bottom">Style</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Arts
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Design
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Fashion
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Architecture
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Luxury
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Beauty
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Video
                    </Link>
                    </li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5 className="border-bottom">More</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Photos
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Longform
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Investigations
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Bharat-News Profile
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Bharat-News Newsletters
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Work for Bharat-News
                    </Link>
                    </li>
                    <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-white">
                        Bharat-News 
                    </Link>
                    </li>
                </ul>
                </div>

            </div>
            <div className="col-4 offset-1" style={{margin: '21px 136px'}}>
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    fdprocessedid="9oef8"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    fdprocessedid="tt4w7b"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
        </footer>
      </div>
    );
}

export default Footer;
