export interface IStudent {
    code : String;
    name : String;
    gender : String;
    TotalMarks : number;
    cgpa : number;
    /*department?: string;

    computeAvgCgpa(cgpa:number):number;*/

}

/*export class Student implements IStudent{
    computeAvgCgpa(cgpa: number): number {
        return cgpa/2.0;
    }

    constructor(public code:String, public name:String, public gender:String,public TotalMarks:number, public cgpa: number){

    }


}*/