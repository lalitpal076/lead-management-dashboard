export default function LeadForm(props) {

  const leadObject = {
    id:''
  };
  function handleChange(event){
    const {name, value} = event.target;
    leadObject[name] = value; 
    leadObject["id"] = props.leadlist.length + 1;
  }

  function handleSubmit(){
    if(leadObject.name && leadObject.phone && leadObject.email && leadObject.status){
      props.addLead(leadObject);
      props.showLeadFormHandler();
    } 
    else{
      alert("Please fill all the fields");
    }
  }
  
  return (
  <>
   <div className="lead-form top-50 start-50 position-absolute translate-middle z-2 rounded-4" >
      <h2>Add Lead</h2><button type="button" style={{position: "absolute", top: "10px", right: "10px"}} class="btn-close" aria-label="Close" onClick={props.showLeadFormHandler}></button>
      <form >
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" name="name" id="name" onChange={handleChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="text" placeholder="Phone" name="phone" id="phone" onChange={handleChange} /><br/>
        <label htmlFor="email">Email:</label > 
        <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} />

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio1" value="New" onChange={handleChange} />
          <label className="form-check-label" htmlFor="radio1">
            New
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio2" value="Follow Up" onChange={handleChange} />
          <label className="form-check-label" htmlFor="radio2">
            Follow Up
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="status" id="radio3" value="Converted" onChange={handleChange} />
          <label className="form-check-label" htmlFor="radio3">
            Converted
          </label>
        </div>
        <button className="btn btn-primary my-3" type="submit" onClick={handleSubmit}>
          Add Lead
        </button>
      </form>
    </div>
    </>
  )

}
