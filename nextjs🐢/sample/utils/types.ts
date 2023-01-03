export interface ItemDataType {
    uploadTime: DateConstructor | undefined;
    title: string;
    description: string;
    image: string;
    email: string;
}

export interface UserDataType {
    name: string;
    email:string;
    password: string;
}

export interface Data {
  message: string;
  item?: {}; // 変数名?：あってもなくても構わない変数
}