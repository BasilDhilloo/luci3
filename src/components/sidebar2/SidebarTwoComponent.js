import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { FiPieChart } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { GiBattery0 } from 'react-icons/gi';
import { FiLock } from 'react-icons/fi';
import './sidebar.css'

import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

// const useStyles = createUseStyles({
//     separator: {
//         borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
//         marginTop: 16,
//         marginBottom: 16,
//         opacity: 0.06
//     }
// });


function SidebarTwoComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    // const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 900;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            {/* <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div> */}

            <MenuItem
                id={SLUGS.propertycontenttwo}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Property'
                icon={AiFillHome}
                onClick={() => onClick(SLUGS.propertycontenttwo)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.purchasetwo}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Purchase'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.purchasetwo)}
            >
            </MenuItem>

                {/* <MenuItem
                    id={SLUGS.overview}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.overview)}
                />
                <MenuItem
                    id={SLUGS.overviewTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.overviewTwo)}
                />
                <MenuItem
                    id={SLUGS.overviewThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.overviewThree)}
                /> */}
            
            <MenuItem
                id={SLUGS.renovation}
                title='Renovation'
                icon={FiDollarSign}
                onClick={() => onClick(SLUGS.renovation)}
            />
            <MenuItem
                id={SLUGS.financing}
                // items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Financing'
                icon={FiPieChart}
                onClick={() => onClick(SLUGS.financing)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.incometwo}
                title='Income'
                icon={FiActivity}
                onClick={() => onClick(SLUGS.incometwo)}
            />
            <MenuItem
                id={SLUGS.expensetwo}
                title='Expense'
                icon={FiFileText}
                onClick={() => onClick(SLUGS.expensetwo)}
            />

                {/* <MenuItem
                    id={SLUGS.expensetwofixed}
                    title='Fixed Expenses'
                    level={2}
                    // icon={IconAgents}
                    onClick={() => onClick(SLUGS.expensetwofixed)}
                />
                <MenuItem
                    id={SLUGS.expensetwovariable}
                    title='Variable Expenses'
                    level={2}
                    // icon={IconContacts}
                    onClick={() => onClick(SLUGS.expensetwovariable)}
                /> */}

            <MenuItem
                id={SLUGS.assumptionstwo}
                title='Assumptions'
                icon={GiBattery0}
                onClick={() => onClick(SLUGS.assumptionstwo)}
            />
            <MenuItem
                id={SLUGS.reporttwo}
                title='Report'
                icon={FiLock}
                onClick={() => onClick(SLUGS.reporttwo)}
            />


            {/* <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} /> */}
        </Menu>
    );
}

export default SidebarTwoComponent;
