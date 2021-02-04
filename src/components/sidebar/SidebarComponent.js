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

function SidebarComponent() {
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
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={AiFillHome}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            


            <MenuItem
                id={SLUGS.purchase}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Purchase'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.purchase)}
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
                id={SLUGS.income}
                title='Income'
                icon={FiDollarSign}
                onClick={() => onClick(SLUGS.income)}
            />
            <MenuItem
                id={SLUGS.expense}
                // items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Expense'
                icon={FiPieChart}
                onClick={() => onClick(SLUGS.expense)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.assumptions}
                title='Assumptions'
                icon={FiActivity}
                onClick={() => onClick(SLUGS.assumptions)}
            />
            <MenuItem
                id={SLUGS.report}
                title='Report'
                icon={FiFileText}
                onClick={() => onClick(SLUGS.report)}
            />
            <MenuItem
                id={SLUGS.expenses}
                title='Expenses'
                icon={GiBattery0}
                onClick={() => onClick(SLUGS.expenses)}
            />
            <MenuItem
                id={SLUGS.fixedvariable}
                title='Fixed Variable'
                icon={FiLock}
                onClick={() => onClick(SLUGS.fixedvariable)}
            />

<MenuItem
                id={SLUGS.propertycontent}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Property'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.propertycontent)}
            >
            </MenuItem>
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

export default SidebarComponent;
