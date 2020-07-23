import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// components
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";

// pages
import Dashboard from "../pages/dashboard/Dashboard"
import SampleForm from "../pages/forms/SampleForm";
import Form1 from "../pages/forms/form1/Form1"
import Form2 from "../pages/forms/form2/Form2"
import Form3 from "../pages/forms/form3/Form3";
import Form4 from "../pages/forms/form4/Form4";
import Form5 from "../pages/forms/form5/Form5";
import Form6 from "../pages/forms/form6/Form6";
import Form7 from "../pages/forms/form7/Form7";
import Form8 from "../pages/forms/form8/Form8";
import Form9 from "../pages/forms/form9/Form9";
import RenewalForm from "../pages/forms/renewal/RenewalForm";
import Cards from "../pages/FormsCards";

function Layout(props) {

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
                    <Route path="/app/form_list" component={Cards}/>
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Route path="/app/sampleform" component={SampleForm} />
                    <Route path="/app/licensee_detail_form" component={Form1}/>
                    <Route path="/app/aerodrome_detail_form" component={Form2}/>
                    <Route path="/app/aerodrome_activities" component={Form3}/>
                    <Route path="/app/control_of_aerodrome" component={Form4}/>
                    <Route path="/app/permissions_and_approvals" component={Form5}/>
                    <Route path="/app/aerodrome_management_personnel" component={Form6}/>
                    <Route path="/app/aerodrome_manual" component={Form7}/>
                    <Route path="/app/details_of_fees" component={Form8}/>
                    <Route path="/app/further_info" component={Form9}/>
                    <Route path="/app/renewal_form" component={RenewalForm}/>
                </Switch>
              </div>
            </div>
          </div>
        </>
  );
}

export default withRouter(Layout);
