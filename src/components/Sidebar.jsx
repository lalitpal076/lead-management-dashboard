// import './Sidebar.css';
export default function Sidebar(props) {
   return (

      <div className=" text-white p-3 vh-100 position-fixed"  style={{ width: "250px",backgroundColor: "#343a40" }}>

          <h3 className="text-center mb-4"> Lead Manager </h3>
          <ul className="nav flex-column">
              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white"> Dashboard </a>
              </li>

              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white"> Leads</a>
              </li>

              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white" onClick={props.showLeadFormHandler}> Add Lead </a>
              </li>

              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-white" > Filter </a>
              </li>
          </ul>

      </div>

    );

}


