import React from 'react'
import { Route, Switch, withRouter, Redirect} from "react-router-dom";

// components
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import Chatbot from "../components/chatbot/Chatbot"

// pages
import Dashboard from "../pages/dashboard/Dashboard"
import Form1Extra from "../pages/forms/form1Extra/Form1Extra"
import LicenseCreateForm from "../pages/forms/form1/LicenseCreateForm"
import Form1 from "../pages/forms/form1/Form1"
import Form2 from "../pages/forms/form2/Form2"
import Form3 from "../pages/forms/form3/Form3";
import Form4 from "../pages/forms/form4/Form4";
import Form5 from "../pages/forms/form5/Form5";
import Form6 from "../pages/forms/form6/Form6";
import Form7 from "../pages/forms/form7/Form7";
import Form8 from "../pages/forms/form8/Form8";
import RenewalForm from "../pages/forms/renewal/RenewalForm";
import DGCAForm5 from "../pages/forms/form5/DGCAForm5";
import DGCAForm6 from "../pages/forms/form6/DGCAForm6";
import DGCAForm7 from "../pages/forms/form7/DGCAForm7";
import DGCAForm8 from "../pages/forms/form8/DGCAForm8";
import DGCAForm1 from "../pages/forms/form1/DGCAForm1";
import DGCAForm2 from "../pages/forms/form2/DGCAForm2";
import DGCAForm3 from "../pages/forms/form3/DGCAForm3";
import { roleHandler } from '../utils/roleHandler';
import FormList from '../components/cards/formList/FormList';
import HistoryPage from '../pages/history/history';

function Layout(props) {

  var role=props.userRole.role;
  // var role="";

  function DGCARoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          role==="DGCA" ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/app/dashboard",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function OperatorRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          role==="Operator" ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/app/dashboard",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <>
          <div style={{padding:'0em',margin:'0'}} className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm2 ms-xl2">
                <Navigation/>
              </div>
              <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
                <div className="ms-Grid-row">
                  <Header history={props.history}/>
                </div>
                <Switch>
                  <Route path="/app/profile" component={Form1Extra}/>
                  <Route path="/app/dashboard" component={Dashboard} />
                  <OperatorRoute path="/app/operator" component={LayoutOperator}/>
                  <DGCARoute path="/app/dgca" component={LayoutDGCA}/>
                </Switch>
                <Chatbot/>
              </div>
            </div>
          </div>
    </>
  )
}

export default withRouter(roleHandler(Layout));


function LayoutDGCA() {
  return (
    <Switch>
      <Route path={`/app/dgca/license/:id/form/aerodrome_detail_form`} component={DGCAForm1} />
      <Route path={`/app/dgca/license/:id/form/aerodrome_activities`} component={DGCAForm2} />
      <Route path={`/app/dgca/license/:id/form/control_of_aerodrome`} component={DGCAForm3} />
      <Route path={`/app/dgca/license/:id/form/aerodrome_management_personnel`} component={DGCAForm5}/>
      <Route path={`/app/dgca/license/:id/form/aerodrome_manual`} component={DGCAForm6}/>
      <Route path={`/app/dgca/license/:id/form/details_of_fees`} component={DGCAForm7}/>
      <Route path={`/app/dgca/license/:id/form/further_info`} component={DGCAForm8}/>
      <Route path={`/app/dgca/license/:id/form`} component={FormList}/>
      <Route path={'app/dcga/license/:id/history'} component={HistoryPage}/>
    </Switch>
  )
}

function LayoutOperator() {
  return (
    <Switch>
      <Route path={`/app/operator/license_create_form`} component={LicenseCreateForm}/>
      <Route path={`/app/operator/license/:id/aerodrome_detail_form`} component={Form1}/>
      <Route path={`/app/operator/license/:id/form_list`} component={FormList}/>
      <Route path={`/app/operator/license/:id/renewal_form`} component={RenewalForm}/>
      <Route path={`/app/operator/license/:id/aerodrome_activities`} component={Form2}/>
      <Route path={`/app/operator/license/:id/control_of_aerodrome`} component={Form3}/>
      <Route path={`/app/operator/license/:id/permissions_and_approvals`} component={Form4}/>
      <Route path={`/app/operator/license/:id/aerodrome_management_personnel`} component={Form5}/>
      <Route path={`/app/operator/license/:id/aerodrome_manual`} component={Form6}/>
      <Route path={`/app/operator/license/:id/details_of_fees`} component={Form7}/>
      <Route path={`/app/operator/license/:id/further_info`} component={Form8}/>
    </Switch>
  )
}  
