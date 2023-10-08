import { Restaurant } from "./Restaurant";

export interface Chef {
    id: number;
    firstName: string;
    lastName: string;
    pic: string;
    description: string;
    restaurants: Restaurant[];
}

// export default interface cheff {}
