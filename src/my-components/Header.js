import React from "react";

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-info"></span>
                    </button>
                    <a className="navbar-brand">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://fonts.google.com/?subset=vietnamese">Google Fonts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://translate.google.co.in/">Google Translate</a>
                            </li>
                           
                        </ul>
                     
                    </div>

                </div>

            </nav>
        </>
    )
}