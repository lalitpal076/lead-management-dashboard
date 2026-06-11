export default function LeadForm(props){



function handleSubmit(event){
  event.preventDefault();
  const formData=new FormData(event.target);
  const data=Object.fromEntries(formData);
  data.id=props.length;
  console.log(data);
  if(data.name && data.phone && data.email && data.status){
      props.showLeadFormHandler();
      props.setLeadList((prevData)=>[data,...prevData])

    } 
    else{
      alert("Please fill all the fields");
    }
  }
  
  return (
  <>
   <div className="lead-form top-50 start-50 position-absolute translate-middle z-2 rounded-4" >
      <h2>Add Lead</h2>
      <button type="button" style={{position: "absolute", top: "10px", right: "10px"}} className="btn-close" aria-label="Close" onClick={props.showLeadFormHandler}></button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" name="name" id="name"  />
        <label htmlFor="phone">Phone:</label>
        <input type="text" placeholder="Phone" name="phone" id="phone"  /><br/>
        <label htmlFor="email">Email:</label > 
        <input type="email" placeholder="Email" name="email" id="email"  />

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio1" value="New"  />
          <label className="form-check-label" htmlFor="radio1">
            New
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio2" value="Follow Up"  />
          <label className="form-check-label" htmlFor="radio2">
            Follow Up
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio3" value="Converted"  />
          <label className="form-check-label" htmlFor="radio3">
            Converted
          </label>
        </div>
        <button className="btn btn-primary my-3" type="submit" >
          Add Lead
        </button>
      </form>
    </div>
    </>
  )

}
