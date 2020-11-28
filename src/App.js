import logo from './logo.svg';
import './App.css';
import RegistrationForm from './container/RegistrationForm';

function App() {
  return (
    <div className="wrapper">
        <div className="content-wrapper" style={{marginLeft:"0px"}}>
          <section className="content" style={{paddingTop:"20px"}}>
            <div className="container-fluid">
            <div className="row">
            <section className="col-lg-12 connectedSortable">
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                    <i className="fas fa-chart-pie mr-1"></i>
                    User Onboard
                    </h3>
                    <div className="card-tools">
                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content p-0">
                      <div className="card ">
                        <RegistrationForm />
                      </div>
                    </div>
                </div>
                </div>
                </section>
                </div>
            </div>
        </section>
        
        </div>
        
    </div>
  );
}

export default App;
