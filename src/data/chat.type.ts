interface IdNamePair {
    id:number;
    name:string;
}
export interface ChatMessageType {
    id:number;
    type: 'me' | 'you';
    text: string;
}
export  interface UserChat extends IdNamePair {
    image:string;
    isOnline?:boolean;
    messages:ChatMessageType[]
}

export  interface GroupChat extends IdNamePair {
    image:string;
    users:string[];
}