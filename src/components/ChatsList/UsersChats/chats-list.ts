import { ChatListItem } from "../chats-list.type"
import avatar1 from '@/assets/avatars/brian-hughes.jpg'
import avatar2 from '@/assets/avatars/female-01.jpg'
import avatar3 from '@/assets/avatars/male-01.jpg'
import avatar4 from '@/assets/avatars/female-05.jpg'
import avatar5 from '@/assets/avatars/male-19.jpg'
import avatar6 from '@/assets/avatars/female-09.jpg'
import avatar7 from '@/assets/avatars/female-08.jpg'
import avatar8 from '@/assets/avatars/male-09.jpg'
import avatar9 from '@/assets/avatars/female-12.jpg'
import avatar10 from '@/assets/avatars/male-10.jpg'
import avatar11 from '@/assets/avatars/male-11.jpg'
import avatar12 from '@/assets/avatars/male-12.jpg'

const  chatsListItems:ChatListItem[] = 
[
    {
        id:1,
        name: 'Ahmad',
        image: avatar1
    },
    {
        id:2,
        name: 'Fatima',
        image: avatar2,
        isOnline:true
    },
    {
        id:3,
        name: 'Omar',
        image: avatar3,
        isOnline:true
    },
    {
        id:4,
        name: 'Sarah',
        image: avatar4
    },
    {
        id:5,
        name: 'Ali',
        image: avatar5,
        isOnline:true
    },
    {
        id:6,
        name: 'Yasmin',
        image: avatar6,
        isOnline:true
    },
    {
        id:7,
        name: 'Ola',
        image: avatar7
    },
    {
        id:8,
        name: 'Yaser',
        image: avatar8,
        isOnline:true
    },
    {
        id:9,
        name: 'Nisren',
        image: avatar9,
        isOnline:true
    },
    {
        id:10,
        name: 'Ahmad Ali',
        image: avatar10
    },
    {
        id:11,
        name: 'Yamen',
        image: avatar11,
        isOnline:true
    },
    {
        id:12,
        name: 'Maximilian',
        image: avatar12,
        isOnline:true
    }
]

export default chatsListItems