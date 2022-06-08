export interface Company {
    CompanyDetails: CompanyDetail[];
    Offices:        any[];
    Plans:          Plan[];
    Id:             number;
    Name:           string;
}

export interface TypesOfPlans {
    label: string;
    value: string;
}

export interface CompanyDetail {
    Id:           number;
    CompanyId:    number;
    DetailPlan:   null;
    DetailPlanId: number;
}

export interface Plan {
    Id:              number;
    Title:           string;
    Description:     string;
    TypeOfPlan:      string;
    CreateDate:      string;
    ActiveTime:      string;
    Price:           number;
    Currency:        string;
    Administrator:   null;
    AdministratorId: number;
    CompanyId:       number;
    InternetId:      number;
    TelecableId:     number;
    TelephoneId:     number;
}


export interface PlanPost {
    title:           string;
    Description:     string;
    TypeOfPlan:      string;
    CreateDate:      Date;
    ActiveTime:      string;
    Price:           number;
    Currency:        string;
    AdministratorId: number;
    CompanyId:       number;
    InternetId?:     number;
    TelecableId?:     number;
    TelephoneId?:     number;
    
}

export interface Product {
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}