import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'
import './Channel.css'
import { UserList } from '..'
import { CloseCreateChannel } from '../../assets/CloseCreateChannel '


const ChannelNameInput = ({ channelName = '', setChannelName }) => {

  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  }

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input value={channelName} onChange={handleChange} placeholder="channel name" />
      <p>Add Members</p>
    </div>
  )

}

const CreateChannel = ({ createType,setisCreating}) => {
  const { client, setActiveChanel } = useChatContext()
  const [selectedUsers, setSelectedUsers] = useState([client.userID || ''])
  const [channelName, setChannelName] = useState('');

  const createChannel = async (e) => {
    e.preventDefault();

    try {
      const newChannel = await client.channel(createType, channelName, {
        name: channelName, members: selectedUsers
      });
      await newChannel.watch()

      setChannelName('');
      setisCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChanel(newChannel);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
        <CloseCreateChannel setisCreating={setisCreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className="create-channel__button-wrapper" onClick={createChannel}>
        <p>{createType === 'team' ? 'Create Channel' : 'Create Message Group'}</p>
      </div>
    </div>
  )
}

export default CreateChannel