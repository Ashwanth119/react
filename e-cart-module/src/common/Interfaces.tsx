export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Cart extends Product{
  count:number;
}
export interface Rating {
  rate: number;
  count: number;
}
export interface User{
    userName:string;
    password:string;
    logged:boolean;
}
export interface OrderDelivery{
  date:string;
  price:number;
}
