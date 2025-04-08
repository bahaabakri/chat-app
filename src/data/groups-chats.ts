
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
import { GroupChat } from './chat.type'

const  groupsChats:GroupChat[] = 
[
    {
        id:1,
        name: 'My Family',
        image: avatar1,
        users: [avatar2, avatar10, avatar3, avatar7, avatar4]
    },
    {
        id:2,
        name: 'Work',
        image: avatar5,
        users: [avatar8, avatar9, avatar10, avatar11, avatar12, avatar5, avatar2, avatar6]
    }
]

export default groupsChats