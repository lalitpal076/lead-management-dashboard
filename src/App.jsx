import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeadCard from './components/LeadCard'
import LeadForm from './components/LeadForm';
import Sidebar from './components/Sidebar';

function App() {

  const BrandName="XYZ Company";
    
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [searchOption, setSearchOption] = useState("map");
  const [searchQuery, setSearchQuery] = useState("");

  function showLeadFormHandler() {
      setShowLeadForm(!showLeadForm);
    }

  const [leadList, setLeadList] = useState([]);

  const leads = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com"
    }
  ]

  function addLead(lead) {
    setLeadList((leadList) => [...leadList, lead]);
  }

  function searchList(query){
    setSearchQuery(query);
    setSearchOption("search");
  }



  return (
    <>
      <Header name={BrandName} searchList={searchList}/>  

      <div className="d-flex" >
      <Sidebar  addLead={addLead} showLeadFormHandler={showLeadFormHandler}/>

      <div className="flex-grow-1 p-4" style={{ display: "inline-block", marginLeft: "250px", backgroundColor: "#f5f7fb" }}>
        <h2 className="mb-4"> Client Leads </h2>

          <div className="d-flex flex-wrap gap-4">
              {searchOption === "map" ?             
              leadList.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} />
              ))
              :searchOption === "filter" ?
              leadList.filter((lead) => lead.status === "New").map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))
              : <LeadCard key={leadList.find((lead) => searchQuery === lead.name || searchQuery === lead.phone).id} lead={leadList.find((lead) => searchQuery === lead.name || searchQuery === lead.phone)} />
            } 
          </div>

      </div>

      {showLeadForm && <LeadForm showLeadFormHandler={showLeadFormHandler}  addLead={addLead} leadlist={leadList}/>}

    </div>
    
    </>
  )
}

export default App
