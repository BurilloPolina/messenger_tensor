import { React } from 'react';
import { ChannelMenu } from './ChannelMenu.js';
import { CommonChannel } from './СommonChannel.js';

export const MenuSidebar = (
    <div className="menu-sidebar">
        <CommonChannel />
        <ChannelMenu />
    </div>
);

export default MenuSidebar;