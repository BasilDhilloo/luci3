import React, { Suspense, lazy } from 'react';         
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import LoadingComponent from 'components/loading';

import Error404 from './../components/error404/Error404';
import Team from './../components/team/Team';
import Teamprofile from './../components/team/teamProfile/Teamprofile';
import LoginTwo from '../components/login2/LoginTwo';
import SignupTwo from '../components/signup2/SignupTwo';
import PricingTwo from './../components/pricing2/PricingTwo';
import About from './../components/about/About';

import PropertyContent from '../components/calculatorOne/propertycontent/PropertyContent'
import Purchase from '../components/calculatorOne/purchase/Purchase'
import NewRenovationTab from '../components/calculatorOne/newrenovationtab/NewRenovationTab'
import FinancingOne from '../components/calculatorOne/financingone/FinancingOne'
import Expense from './../components/expense/Expense'
import Income from '../components/calculatorOne/income/Income'
import Assumptions from '../components/calculatorOne/assumptions/Assumptions'
import Report from '../components/calculatorOne/report/Report'
import Expenses from '../components/calculatorOne/fixedexpenses/FixedExpenses'
import FixedVariable from './../components/fixedvariable/FixedVariable'
import Home from 'components/home/Home';
import FixedExpenses from '../components/calculatorOne/fixedexpenses/FixedExpenses'
import VariableExpenses from '../components/calculatorOne/variableexpenses/VariableExpenses'

//Imports of Second Calculator 
import PropertyContentTwo from '../components/calculatorTwo/propertycontent2/PropertyContentTwo'
import PurchaseTwo from '../components/calculatorTwo/purchase2/PurchaseTwo'
import IncomeTwo from '../components/calculatorTwo/income2/IncomeTwo'
import Renovation from '../components/calculatorTwo/renovation/Renovation'
import Financing from '../components/calculatorTwo/financing/Financing'
import ExpenseTwo from './../components/expense2/ExpenseTwo'
import FixedExpensesTwo  from './../components/calculatorTwo/fixedexpenses/FixedExpensesTwo'
import VariableExpensesTwo from './../components/calculatorTwo/variableexpenses/VariableExpensesTwo'
import AssumptionsTwo from '../components/calculatorTwo/assumptions2/AssumptionsTwo'
import ReportTwo from '../components/calculatorTwo/report2/ReportTwo'

// Fauz Routes
import Contact from "../components/contact/Contact";
import Profile from "../components/profile/Profile";
import PaymentDetails from "../components/payment_details/PaymentDetails";
import AdminLogin from "../components/admin_login/AdminLogin";
import PendingUsers from "../components/pending_users/PendingUsers";
import FAQs from "../components/faqs/FAQs";
import ChatMenu from "../components/chat_menu/ChatMenu";





function Routes() {
    return (
        <div>
            <BrowserRouter basename={'/'}>
                <Suspense fallback={<LoadingComponent loading />}>

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
                    <Route exact path={"/newrenovationtab"} component={NewRenovationTab} />
                    <Route exact path={"/financingone"} component={FinancingOne} />
                    <Route exact path={"/expense"} component={Expense} />
                    <Route exact path={"/income"} component={Income} />
                    <Route exact path={"/expenses"} component={Expenses} />
                    <Route exact path={"/fixedexpenses"} component={FixedExpenses} />
                    <Route exact path={"/variableexpenses"} component={VariableExpenses} />
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
                    <Route exact path={"/fixedexpensestwo"} component={FixedExpensesTwo} />
                    <Route exact path={"/variableexpensestwo"} component={VariableExpensesTwo} />
                    <Route exact path={"/assumptionstwo"} component={AssumptionsTwo} />
                    <Route exact path={"/reporttwo"} component={ReportTwo} />

                    <Route exact path={"/contact_us"} component={Contact} />
                    <Route exact path={"/profile"} component={Profile} />
                    <Route exact path={"/payment_details"} component={PaymentDetails} />

                    <Route exact path={"/admin_login"} component={AdminLogin} />
                    <Route exact path={"/faqs"} component={FAQs} />
                    <Route exact path={"/pending_users"} component={PendingUsers} />
                    <Route exact path={"/chat"} component={ChatMenu} />

                </Switch>
                </Suspense>
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
