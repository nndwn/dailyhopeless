import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import PrivateRoute from "../components/privateRoute";
import CatloverPage from "../crud/catlovers";
import Pagelogin from "../templates/formlogin/pagelogin";

const Panel = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/panel/catlover" component={CatloverPage}/>
            {/* <Login path="/panel/login"/> */}
            <Pagelogin path="/panel/login" />
        </Router>
    </Layout>
)

export default Panel