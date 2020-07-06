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
                  <Header/>
                </div>
                <Switch>
                  <Route path="/app/dashboard" component={Dashboard} />
                  <Route path="/app/sampleform" component={SampleForm} />
                  <Route path="/app/licensee_detail_form" component={Form1}/>
                  <Route path="/app/aerodrome_detail_form" component={Form2}/>
                  <Route path="/app/aerodrome_activities" component={Form3}/>
                </Switch>
              </div>
            </div>
          </div>
        </>
  );
}

export default withRouter(Layout);
