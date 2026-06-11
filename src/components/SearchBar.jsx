export default function SearchBar(props) {
function formHandler(event){
  event.preventDefault();
  const formData=new FormData(event.target);
  const data=Object.fromEntries(formData);
  props.searchQuery(data.search)
  console.log(data);
}
  return (
    <>
      <form className="d-flex " role="search" onSubmit={formHandler}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </>
  )
}
