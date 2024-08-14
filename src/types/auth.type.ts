export type User_Detail_Type={
    employeeId:string;
    email:string;
    password:string;
    confirmPassword:string;
    department_id:string;
    role_id:string;
    grade_id:string;
    imgurl:string;
}

export type User_Credential_Type={
    employeeId:string;
    password:string;
}

export type UpdateUserType=Partial<User_Detail_Type>;