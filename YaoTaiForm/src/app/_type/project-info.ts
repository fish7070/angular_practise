export interface ProjectInfo {
    id: number;
    taskid: number;
    purchaseid: number;
    workday?: string;
    deadline?: string;
    product: Product;
    customer: Customer;
    taskquantity: number;
}

export interface Product {
    id: number;
    name: string;
    inventory: string;
    materialweight: string;
    productionquantity: string;
}

export interface Customer {
    id: number;
    name: string;
    phonenumber: string;
}