import '../components/Home.css'

function Home() {
    return(
        <>
            
            <div className="banner d-flex">
            <div className="col">
                <div className="banner-content">
                    <h1>Get body in <span className="font-i">shape</span> & stay healthy</h1>
                    <p>Join us to transform your fitness journey. Discover expert workouts, nutrition tips, and wellness advice tailored to help you achieve a healthier, stronger, and more vibrant you.</p>
                    <div className="banner-btn d-flex">
                        <button className="btn-primary for-d">Join Club Now!</button>
                        <button className="btn-primary for-m">Join Now!</button>
                        <button className="btn-2">Download App</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="banner-img">
                    <div classNameName="free-work wrk-out">
                        <h1>500+</h1>
                        <p>Free Workout Videos</p>
                    </div>
                    <div className="video-tuto wrk-out d-flex">
                        <div className="spot"></div>
                        <div className="tuto">
                            <h1>350+</h1>
                            <p>Video tutorial</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        </>
    );
  }
  
  export default Home;
  