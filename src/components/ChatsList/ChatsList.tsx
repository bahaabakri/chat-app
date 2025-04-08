import styles from './ChatsList.module.scss'
import avatar from '@/assets/avatars/male-01.jpg'
import Avatar from '@/UI/Avatar/Avatar';
import CustomTextField from '@/UI/CustomTextField/CustomTextField';
import { ChevronLeftIcon, MagnifyingGlassIcon, UserIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import chatsListItems from './UsersChats/chats-list';
import ChatItem from './UsersChats/ChatItem/ChatItem';
import UsersChats from './UsersChats/UsersChats';
import GroupsChats from './GroupsChats/GroupsChats';
const ChatsList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'chats' | 'groups'>('chats')
    return (
      <section className={styles['chat-lists']}>
        <div className={styles['chat-lists-header']}>
          <div className={styles['avatar-wrapper']}>
            <Avatar isOnline avatar={avatar}/>
          </div>
          <div className={styles['arrow-add-wrapper']}>
            <div className={styles['arrow-wrapper']}>
              <ChevronLeftIcon />

            </div>
            <div className={styles['add-wrapper']}>
              <UserPlusIcon />
            </div>
          </div>
        </div>
        <div className={styles['chat-lists-search']}>
          <CustomTextField 
          icon={<MagnifyingGlassIcon />}
          placeholder='Search Conversation...'></CustomTextField>
        </div>
        <div className={styles['chat-lists-content']}>
          <div className={styles['chat-lists-tabs']}>
            <div className={`${styles['chat-lists-tab']} ${selectedTab === 'chats' ? 'border-b-2' : undefined}`} onClick={() => setSelectedTab('chats')}>
              <div>
                <UserIcon stroke={selectedTab === 'chats' ? 'var(--primary-color)' : 'currentColor'}/>
              </div>
            </div>
            <div className={`${styles['chat-lists-tab']} ${selectedTab === 'groups' ? 'border-b-2' : undefined}`} onClick={() => setSelectedTab('groups')}>
              <div className={selectedTab === 'groups' ? 'border-b-2' : undefined}>
                <UsersIcon stroke={selectedTab === 'groups' ? 'var(--primary-color)' : 'currentColor'} />
              </div>
            </div>
          </div>
          {
            selectedTab === 'chats' ? <UsersChats/> : <GroupsChats />
          }

        </div>
        <div></div>
      </section>
    );
  };
  
  export default ChatsList;