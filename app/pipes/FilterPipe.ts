import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform {

    transform(arr: Array<any>, token: string): Array<any> {
        if (!arr) return arr;
        if (!token) return arr;

        return arr.filter(obj => this.isTokenFound(obj, token));
    }

    isTokenFound(obj, token): boolean {
        var re = new RegExp(token, "i");
        for (let key in obj) {
            if (re.test(obj[key])) {
                return true;
            }
        }
        return false;
    }
}