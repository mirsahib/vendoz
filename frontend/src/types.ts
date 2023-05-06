export interface IProduct{
    id:string;
    name:string;
    desc:string;
    price:number;
    img:string;
    img2:string;
    isNew:boolean;
    type:'normal'|'featured'|'trending'
    catagory:string
}