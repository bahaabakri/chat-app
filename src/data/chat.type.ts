interface IdNamePair {
    id:number;
    name:string;
}
export interface ChatMessageType {
    messageType:'text' | 'file' | 'image'
    id:number;
    type: 'me' | 'you';
    text?: string;
    fileSrc?:string;
    fileName?:string
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