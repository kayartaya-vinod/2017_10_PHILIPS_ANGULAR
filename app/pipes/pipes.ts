import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "age"
})
export class AgePipe {
    transform(dob: string, flag: number = 1): string {
        
        if (!dob) return "";

        let ms: number = Date.now() - new Date(dob).getTime();
        let diff: Date = new Date(ms);

        let d = diff.getDate(),
            m = diff.getMonth(),
            y = diff.getFullYear() - 1970;
        switch (flag) {
            case 2:
                return `${y} years and ${m} months`;
            case 3:
                return `${y} years, ${m} months and ${d} days`;
            default:
                return `${y} years`;
        }
    }
}



@Pipe({
    name: "title"
})
export class TitlePipe implements PipeTransform {

    transform(gender:string) {
        if(!gender) return "";
        
        gender = gender.toLowerCase();
        switch(gender){
            case "m": case "male": return "Mr.";
            case "f": case "female": return "Ms.";
        }
        return "";
    }

}