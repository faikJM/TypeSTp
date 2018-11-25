//Classe main

//importations de classes

import Task from './Task';
import Projet from './project';
import date from './date';
import {Priority} from './priority'; 

//Tests sur la classe date

    let Dat = new date(2020,11,4);

    let affich1 : string = Dat.toString();

    console.log(affich1);

    let affich2 : string = Dat.Create();
    
    console.log(affich2);

    let affichSet : string = Dat.setDate(2018,11,25);

    console.log(affichSet);

    let affichYest : string = Dat.yesterday();

    console.log(affichYest);

    let affichTomo : string = Dat.yesterday();

    console.log(affichTomo);

    let affichADay : string = Dat.addDay(2);

    console.log(affichADay);

    let affichSDay : string = Dat.subDay();

    console.log(affichSDay);

    let affichAMonth : string = Dat.addMonth();

    console.log(affichAMonth);

    let affichSMonth : string = Dat.subMonth(3);

    console.log(affichSMonth);

    let affichAYear : string = Dat.addYear(4);

    console.log(affichAYear);

    let affichSYear : string = Dat.subYear(4);

    console.log(affichSYear);

    //Tests sur la classe Priority

    let priori : Priority = 1;

    //Tests sur la classe task

    let taches = new Task("finir tp typeScripts",Dat,priori,false);
    let afiTask1 : string = Task.toString();
    console.log(afiTask1);

    let IDTach : number = taches.add("finir tp typeScript",Dat,priori);
    console.log(IDTach);
    

    priori=2;
    taches.update("Finir calculatrice avec Ionic",Dat,priori,false);
    let afiTask2 : string = Task.toString();
    console.log(afiTask2);

    taches.close;
    Dat.addDay(7);
    let afiTask3 : string = Task.toString();
    console.log(afiTask3);

    //Tests sur la classe projet

    let TabTask : Task[];
    Dat.addDay(4);
    TabTask[1]._content="cours android";
    TabTask[1]._date=Dat;
    TabTask[1]._priority=1;
    TabTask[1]._checked=true;

    Dat.addDay(8);
    TabTask[1]._content="cours linux";
    TabTask[1]._date=Dat;
    TabTask[1]._priority=2;
    TabTask[1]._checked=false;

    Dat.addDay(12);
    TabTask[1]._content="expose Ionic";
    TabTask[1]._date=Dat;
    TabTask[1]._priority=3;
    TabTask[1]._checked=true;

    Dat.addDay(17);
    TabTask[1]._content="GDG fest";
    TabTask[1]._date=Dat;
    TabTask[1]._priority=3;
    TabTask[1]._checked=false;

    let proJ = new Projet(TabTask);
    Dat.addDay(1);
    let NewTac : Task = new Task("manger",Dat,priori,false);

    proJ.addtask(TabTask,NewTac);











    
    

//Gbangbade Faïk