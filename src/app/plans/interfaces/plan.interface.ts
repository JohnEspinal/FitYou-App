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
    Company:         null;
    CompanyId:       number;
}
