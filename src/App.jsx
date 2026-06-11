import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeadCard from './components/LeadCard'
import LeadForm from './components/LeadForm';
import Sidebar from './components/Sidebar';

function App() {

  const BrandName="BlueOrbit Systems";
    
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [searchOption, setSearchOption] = useState("map");
  const [searchValue, setSearchValue] = useState('');

  // const [Query, setQuery] = useState("");

  function showLeadFormHandler(){
      setShowLeadForm(!showLeadForm);
  }

  const [leadList, setLeadList] = useState([
        {
          id: 1,
          name: "Amit Verma",
          phone: "9876543210",
          email: "amit@gmail.com",
          status: "New"
        },
        {
          id: 2,
          name: "Suman Gupta",
          phone: "9123456780",
          email: "suman@gmail.com",
          status: "Follow Up"
        },
        {
          id: 3,
          name: "Ravi Kumar",
          phone: "9988776655",
          email: "ravi@gmail.com",
          status: "Converted"
        },
        {
          id: 4,
          name: "Neha Singh",
          phone: "9876501234",
          email: "neha@gmail.com",
          status: "Follow Up"
        },
        {
          id: 5,
          name: "Pooja Yadav",
          phone: "9765432109",
          email: "pooja@gmail.com",
          status: "New"
        },
        {
          id: 6,
          name: "Arjun Mehta",
          phone: "9654321098",
          email: "arjun@gmail.com",
          status: "Follow Up"
        },
        {
          id: 7,
          name: "Kiran Sharma",
          phone: "9543210987",
          email: "kiran@gmail.com",
          status: "Converted"
        },
        {
          id: 8,
          name: "Deepak Chauhan",
          phone: "9432109876",
          email: "deepak@gmail.com",
          status: "New"
        },
        {
          id: 9,
          name: "Anjali Mishra",
          phone: "9321098765",
          email: "anjali@gmail.com",
          status: "New"
        },
        {
          id: 10,
          name: "Vikas Pandey",
          phone: "9210987654",
          email: "vikas@gmail.com",
          status: "Follow Up"
        },
        {
          id: 11,
          name: "Meena Rani",
          phone: "9109876543",
          email: "meena@gmail.com",
          status: "Converted"
        },
        {
          id: 12,
          name: "Suresh Patil",
          phone: "9098765432",
          email: "suresh@gmail.com",
          status: "Follow Up"
        }
      ]
  );

  function searchQuery(search){
    setSearchValue(search)
    setSearchOption("search");
  }



  return (
    <>
      <Header name={BrandName} searchQuery={searchQuery}/>  

      <div className="d-flex" >
      <Sidebar  showLeadFormHandler={showLeadFormHandler} setSearchOption={setSearchOption} searchOption={searchOption} setSearchValue={setSearchValue} />

      <div className="flex-grow-1 p-4" style={{ display: "inline-block", marginLeft: "250px", backgroundColor: "#f5f7fb" }}>
        <h2 className="mb-4"> Client Leads </h2>

          <div className="d-flex flex-wrap gap-4">
              {searchOption === "map" ?             
              leadList.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} />
              ))
              :searchOption === "filter" ?leadList.filter((lead) =>lead.status === searchValue).map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))
              : <LeadCard key={leadList.find((lead) => searchValue === lead.name || searchValue === lead.phone).id?1:1}  lead={leadList.find((lead) => searchValue === lead.name || searchValue === lead.phone)} />
            } 
          </div>

      </div>

      {showLeadForm && <LeadForm showLeadFormHandler={showLeadFormHandler} setLeadList={setLeadList} length={leadList.length}/>}

    </div>
    
    </>
  )
}

export default App
