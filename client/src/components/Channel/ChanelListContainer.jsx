import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import { ChannelList, useChatContext } from 'stream-chat-react';
import {ChannelSearch,TeamChanelList, TeamChanelPreview } from '..'
import LogOutIcon from '../../assets/logout.png'
// import Logo from '../assets/logo2.png'
import './Channel.css'
import { red } from '@material-ui/core/colors';

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon2">
            <div className="icon2__inner" onClick={logout}>
                <img src={LogOutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

// const CompanyHeader = () => (
//     <div className="channel-list__header">
    
//     </div>
// )


const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setisCreating, setCreateType, setisEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper ">
                {/* <CompanyHeader /> */}
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChanelList
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setisCreating={setisCreating}
                            setCreateType={setCreateType}
                            setisEditing={setisEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChanelPreview
                            {...previewProps}
                            setisCreating={setisCreating}
                            setisEditing={setisEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChanelList
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setisCreating={setisCreating}
                            setCreateType={setCreateType}
                            setisEditing={setisEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChanelPreview
                            {...previewProps}
                            setisCreating={setisCreating}
                            setisEditing={setisEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>

       
    );
}
console.log(SideBar )

const ChannelListContainer = ({ setCreateType, setisCreating, setisEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent
                    setisCreating={setisCreating}
                    setCreateType={setCreateType}
                    setisEditing={setisEditing}
                />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channerl-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent
                    setisCreating={setisCreating}
                    setCreateType={setCreateType}
                    setisEditing={setisEditing}
                    setToggleContainer={setToggleContainer}
                />
            </div>
        </>
    )

}

export default ChannelListContainer;