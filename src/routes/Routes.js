import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Error404 from './../components/error404/Error404';
import Team from './../components/team/Team';
import Teamprofile from './../components/team/teamProfile/Teamprofile';
import LoginTwo from './../components/login2/LoginTwo';
import SignupTwo from './../components/signup/signuptwo/SignupTwo';
import PricingTwo from './../components/pricing2/PricingTwo';
import About from './../components/about/About';
import PropertyContent from './../components/propertycontent/PropertyContent'
import Purchase from './../components/purchase/Purchase'
import Expense from './../components/expense/Expense'
import Income from './../components/income/Income'
import Assumptions from './../components/assumptions/Assumptions'
import Report from './../components/report/Report'
import Expenses from './../components/expenses/Expenses'
import FixedVariable from './../components/fixedvariable/FixedVariable'
import Home from 'components/home/Home';

//Imports of Second Calculator 
import PropertyContentTwo from './../components/propertycontent2/PropertyContentTwo'
import PurchaseTwo from './../components/purchase2/PurchaseTwo'
import IncomeTwo from './../components/income2/IncomeTwo'
import Renovation from './../components/renovation/Renovation'
import Financing from './../components/financing/Financing'
import ExpenseTwo from './../components/expense2/ExpenseTwo'
import AssumptionsTwo from './../components/assumptions2/AssumptionsTwo'
import ReportTwo from './../components/report2/ReportTwo'


function Routes() {
    return (
        <div>
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/pricing"} component={PricingTwo}/>
                    <Route exact path={"/error404"} component={Error404} />
                    <Route exact path={"/team"} component={Team} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/teamprofile"} component={Teamprofile} />
                    <Route exact path={"/login"} component={LoginTwo} />
                    <Route exact path={"/signup"} component={SignupTwo} />
                    <Route exact path={"/property"} component={PropertyContent} />
                    <Route exact path={"/purchase"} component={Purchase} />
                    <Route exact path={"/expense"} component={Expense} />
                    <Route exact path={"/income"} component={Income} />
                    <Route exact path={"/expenses"} component={Expenses} />
                    <Route exact path={"/assumptions"} component={Assumptions} />
                    <Route exact path={"/report"} component={Report} />
                    <Route exact path={"/fixedVariable"} component={FixedVariable} /> 
                    
                    {/* Routes for Second Calculator */}
                    <Route exact path={"/propertytwo"} component={PropertyContentTwo} />
                    <Route exact path={"/purchasetwo"} component={PurchaseTwo} />
                    <Route exact path={"/incometwo"} component={IncomeTwo} />
                    <Route exact path={"/renovation"} component={Renovation} />
                    <Route exact path={"/financing"} component={Financing} />
                    <Route exact path={"/expensetwo"} component={ExpenseTwo} />
                    <Route exact path={"/assumptionstwo"} component={AssumptionsTwo} />
                    <Route exact path={"/reporttwo"} component={ReportTwo} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;


























// function Routes() {
//     const { pathname } = useLocation();
//     // eslint-disable-next-line no-unused-vars
//     const [width, height] = useWindowSize();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     const isUserLoggedIn = true;
//     return isUserLoggedIn ? <PublicRoutes /> : <PrivateRoutes />;
// }

// export default Routes;
// import React from 'react'
