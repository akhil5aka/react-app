import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
   
    

    <div className="container">
        <div className="row">
            <div className="cols col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <div className="row g-3">
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" className="form-label">Name</label>
                        <input type="text" placeholder="enter your name" className="form-control"></input>

                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">className</label>
                        <input type="text" placeholder="Enter your className" className="form-control"></input>

                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Admission Number</label>

                        <input type="text" placeholder="Enter your Admission Number" className="form-control"></input>
                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" className="form-label">Mobile NUmber</label>
                        <input type="text" placeholder="Enter your Mobile Number" className="form-control"></input>

                    </div>
                    <div className="cols col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             
                        <label for="" className="form-label">College</label>
                        <input type="text" placeholder="Enter your college"  className="form-control"></input>

                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">User Name</label>
                        <input type="text" placeholder="Enter your User Name" className="form-control"></input>
                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" className="form-label">Password</label>

                        <input type="password" placeholder="Enter your Password" name="" id="" className="form-control"></input>
                    </div>
                    <div className="cols col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-primary">Register</button>
                    </div>
                   

            </div>
        </div>
    </div>
    </div>
   
  );
}

export default App;
