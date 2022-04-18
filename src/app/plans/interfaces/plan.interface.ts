export interface Company {
    CompanyDetails: CompanyDetail[];
    Offices:        any[];
    Plans:          Plan[];
    Id:             number;
    Name:           string;
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
    CreateDate:      Date;
    ActiveTime:      string;
    Price:           number;
    Currency:        string;
    Administrator:   null;
    AdministratorId: number;
    CompanyId:       number;
}


