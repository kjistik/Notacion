import { students } from "./student";
import { subject } from "./subjects";
import { teachers } from "./teacher";

export interface grades {
    idGrade: any,
    grade: number,
    grades_student: students,
    grades_teacher: teachers
}