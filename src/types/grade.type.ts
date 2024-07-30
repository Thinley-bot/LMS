export type CreateGrade={
    grade_name:string;
    createdAt: string;
    updatedAt: string;
}

export type GradeId=string;

type UpdateGrade={
    grade_name:string;
    createdAt: string;
    updatedAt: string;
}
export type OptionalUpdateGrade = Partial<UpdateGrade>;
