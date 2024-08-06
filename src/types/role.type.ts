export type RoleTypeId=string;

export type CreateRoleType={
    role:string;
    createdAt:Date;
    updatedAt:Date;
}

export type UpdateRoleType=Partial<CreateRoleType>;