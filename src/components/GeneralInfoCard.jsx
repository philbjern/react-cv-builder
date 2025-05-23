import { useState } from "react";

import "../styles/GeneralInfoCard.css"

function GeneralInfoCard() {

  const generalInfoInitialData = {
    name: "John Doee",
    email: "name@example.com",
    bio: "This is a bio"
  }

  const [ generalInfo, setGeneralInfo ] = useState(generalInfoInitialData);

  const handleClickSave = () => {
    
  }

  return (
     <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body text-start">
              <h5 className="card-title">General Information</h5>
              <div class="mb-3">
                <label for="nameFormControl" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" value={generalInfo.name} />
              </div>
              <div class="mb-3">
                <label for="mailFormControl" class="form-label">Email address</label>
                <input type="email" class="form-control" id="mailFormControl" placeholder="name@example.com" value={generalInfo.email}/>
              </div>
              <div class="mb-3">
                <label for="textareaControl" class="form-label">Bio</label>
                <textarea class="form-control" id="textareaControl" rows="3" value={generalInfo.bio}></textarea>
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleClickSave}>Save</button>
          </div>
        </div>
  )
}

export default GeneralInfoCard