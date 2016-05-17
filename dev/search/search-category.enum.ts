/**
 * Created by chalaki on 5/15/16.
 */

export interface Category {
    code:string,
    value:string
}

export enum CategoryENUM{
    All = <any>{code: "ALL", value: "All Categories"},
    Terminals = <any>{code: "TRM", value: "Terminals"},
    Machines = <any>{code: "MACH", value: "Machines"}

}

export namespace CategoryENUM {
    export function getCode(cat:CategoryENUM) {
        return cat['code'];
    }

    export function getValue(cat:CategoryENUM) {
        return cat['value'];
        
    }
    
    export function getCategories(){

        var categories: any[]=[];
        for(var entry in CategoryENUM ){
            var obj = (CategoryENUM[entry]);
            if(obj!=null && obj.hasOwnProperty('code')){
                categories.push(obj);
            }
        }
        return categories;
    }

}
