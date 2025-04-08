interface IdNamePair {
    id:number;
    name:string;
}
export  interface ChatListItem extends IdNamePair {
    image:string;
    isOnline?:boolean;
}

export  interface GroupListItem extends IdNamePair {
    image:string;
    users:string[];
}