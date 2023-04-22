import React from "react";
import Menu, {Currentline} from "../../../components/layout/menu";
import { navmobile } from "../style";

const NavMobile = ({data}) => (
    <nav className="navMobile" css={navmobile}>
        <Menu
            menu={data.menu}>
        <Currentline/>
        </Menu>
    </nav>
)

export default NavMobile