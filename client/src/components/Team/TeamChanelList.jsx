import React from 'react'
import { AddChannel } from '../../assets/AddChannel '
import './TeamChanel.css'

const TeamChanelList = ({ setToggleContainer, children, error = false, loading, type, isCreating, setisCreating, setCreateType, setisEditing }) => {
  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </p>
      </div>
    )
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        <AddChannel
          isCreating={isCreating}
          setisCreating={setisCreating}
          setCreateType={setCreateType}
          setisEditing={setisEditing}
          type={type === 'team' ? 'team' : 'messaging'}
          setToggleContainer={setToggleContainer}
        />
      </div>
      {children}
    </div>
  )
}



export default TeamChanelList