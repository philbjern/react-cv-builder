import { useState } from 'react'
import './App.css'
import GeneralInfoCard from './components/GeneralInfoCard';
import EducationCard from './components/EducationCard';
import WorkExperienceCard from './components/WorkExperienceCard';

function App() {

  let [ isEditMode, setIsEditMode ] = useState(true);

  const handleSubmit = () => {
    alert('CV submitted!')
  }

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">React CV Builder</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" ariaCurrent="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>React CV Builder</h1>
        <p className="lead">A simple CV builder built with React and Bootstrap</p>
      </header>

      <div className="row">
        <GeneralInfoCard />
       
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Controls</h5>
              <p className="card-text">
                You can edit and submit the CV here.
              </p>
              <button type="button" className="btn btn-primary m-2" onClick={handleSubmit}>Submit</button>
              <button type="button" className="btn btn-danger m-2" onClick={handleEditToggle}>
                {isEditMode ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <EducationCard />

      <WorkExperienceCard />

      <div className="alert alert-info" role="alert">
        Don't forget to share your finished CV with others ❤️️❤️️❤️!
      </div>

      <footer className="text-center mt-5 py-3 border-top">
        <p>&copy; {new Date().getFullYear()} React CV Builder. Built with React & Bootstrap.</p>
      </footer>
    </div>
    </>
  );
}

export default App
