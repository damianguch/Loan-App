export default function LoanHistory() {
  return (
    <div className="container">
      <div className="text-center">
        <button className="btn btn-success">Request New Loan</button>
        <button className="btn btn-secondary ms-3">Withdraw Funds</button>
      </div>
      <br />
      <h5>Loan History:</h5>
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Aug 4, 2020 <br />
            Amount: ₦15,000
          </div>
          <div>
            Status: <span className="badge bg-warning">Running</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Jul 1, 2020 <br />
            Amount: ₦10,000
          </div>
          <div>
            Status: <span className="badge bg-success">Paid</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-3">
        <div className="loan-history-card">
          <div>
            Request Date: Feb 10, 2020 <br />
            Amount: ₦35,000
          </div>
          <div>
            Status: <span className="badge bg-success">Paid</span> <br />
            Interest: 10%
          </div>
        </div>
      </div>
    </div>
  );
}
