export default function LeadCard(props) {
  return (
    <div>
        <div className="lead-card">
            <div className="lead-header">
                <h3>{props.lead.name}</h3>
                <span className="status" style={{backgroundColor:`${props.lead.status==='New'?'#0d6efd':props.lead.status==='Follow Up'?'orange':'green'}`}}>{props.lead.status}</span>
            </div>

            <div className="lead-body">
                <p><strong>Phone:</strong> {props.lead.phone}  </p>
                <p><strong>Email:</strong> {props.lead.email}</p>
            </div>

        </div>
    </div>
  )
}
