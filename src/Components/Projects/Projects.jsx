import React from 'react'
import './Projects.css'
import project1 from '../Images/Screenshot (15).png'

export default function Projects() {
    return (
        <div id='projects' className='container mt-5 projects text-center'>
            <h1 className='mb-5'>My Projects</h1>
            <div className="row gap-5">
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
                <div class="card col-md-3 col-12">
                    <img class="card-img" src={project1} alt="Card image cap" />
                    <div class="card-body mt-3">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <div className="card-text">aut praesentium, voluptas magnam sunt molestias sapiente odio. A, mollitia vel.</div>
                        <a href="">see project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
