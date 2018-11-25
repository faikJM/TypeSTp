//importations de la classe priority et date

import date from './date';
import {Priority} from './priority'; 

// Classe task

export default class Task{

    public _content : string;
    public _date : date;  
    public _priority : Priority;
    public _checked : boolean; 

//constructeurs 

    constructor( content:string, date:date, priority:Priority, checked:boolean){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }

//getters

    get content (): string{
        return this._content;
    }

    get date (): date{
        return this._date;
    }

    get priority (): Priority{
        return this._priority;
    }

    get checked (): boolean{
        return this._checked;
    }

//setters

    set content (content:string){
            this._content=content;
    }

    set date (date:date){
        this._date=date;
    }

    set priority (priority:Priority){
        this._priority=priority;
    }

    set checked (checked:boolean){
        checked=false;
        this._checked=checked;
    }

//les méthodes 

public add ( content:string, date:date, priority:Priority ) : number{
    let id : number = Math.random()*508;
    return id; 
} 

public update ( content?:string, date?:date, priority?:Priority,checked?:boolean ){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
}

public close (checked:boolean) : boolean{
    return true;
}

public toString ( contenu:string, dat:date, priorit:Priority, verif:boolean ) : string {
        contenu = this._content;
        let datS : string = dat.toString(dat._year,dat._month,dat._day);
        priorit = this._priority;
        verif = this._checked;

        let tach : string = " CONTENU : " +contenu+ "\n DATE : " +datS+ "\n PRIORITE : " +priorit+ "\n ETAT : " +verif ;
        return tach; 

}

}
