

export class Feedback {

    
    interviewerName:string;
    id:Number;
    name:string;
    interviewDate:string;
    interviewTime:string;
    interviewResult:string;
    interviewComments:string;


    constructor(interviewerName:string, id:Number, name:string, interviewDate:string, interviewTime:string, interviewResult:string, interviewComments:string){
       
        this.interviewerName = interviewerName;
        this.id = id;
        this.name = name;
        this.interviewDate = interviewDate;
        this.interviewTime = interviewTime;
        this.interviewResult = interviewResult;
        this.interviewComments = interviewComments;
    }
}