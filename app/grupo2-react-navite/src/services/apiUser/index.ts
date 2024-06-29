import { AxiosResponse } from "axios";
import axios  from 'axios';

export const apiUser = axios.create({
    baseURL: "https://8321-170-80-70-249.ngrok-free.app/users",  

});
    
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

export function getUser(id: number): Promise<AxiosResponse<IUser, any>> {
    const url = 'email';

    return apiUser.get(url);
}

// export function createUser(user: IUser): Promise<AxiosResponse<IUser>> {
//     return apiUser.post<IUser>('', user);
// }
