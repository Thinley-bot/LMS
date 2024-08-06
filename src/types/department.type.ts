export type DepartmentId=string;

type UpdateDepartment={
    name:string;
    acronym:string;
    createdAt: string;
    updatedAt: string;
}

export type PartialUpdateDepartment=Partial<UpdateDepartment>