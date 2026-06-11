// import './Sidebar.css';
export default function Sidebar(props) {

   return (

      <div className=" text-white p-3 vh-100 position-fixed"  style={{ width: "250px",backgroundColor: "#343a40" }}>

          <h3 className="text-center mb-4"> Lead Manager </h3><hr />
          <ul className="nav flex-column side-ul">
              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-black" onClick={()=>{props.setSearchOption('map')}}> Dashboard </a>
              </li>

              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-black" onClick={props.showLeadFormHandler}> Add Lead </a>
              </li>

              <li className="nav-item mb-3">
                  <a href="#" className="nav-link text-black" onClick={()=>{props.setSearchOption('filter')}} > Filter </a>
              </li>

                { props.searchOption === 'filter'?<ul className="filter-ul">
                    <li style={{backgroundColor:'rgb(13, 110, 253)'}} onClick={()=>props.setSearchValue('New')}>New</li>
                    <li style={{backgroundColor:'orange'}} onClick={()=>props.setSearchValue('Follow Up')}>Follow Up</li>
                    <li style={{backgroundColor:'green'}} onClick={()=>props.setSearchValue('Converted')}>Converted</li>
                </ul>:''}
          </ul>

      </div>

    );

}


