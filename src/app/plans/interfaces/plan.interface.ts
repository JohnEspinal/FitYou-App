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
    Company:         null;
    CompanyId:       number;
}
