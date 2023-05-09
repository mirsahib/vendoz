import { IProduct } from "./Product";
export interface ApiResponse {
    data:IProduct[];
    meta:{
        pagination:{
            page:number,
            pageSize:number
            pageCount:number
            total:number
        }
    }
}