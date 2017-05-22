import { Input } from '@angular/core';
import { Job } from './job';


export class ComputertimeService {

    jobDict = [{title: "First music practice", description: "Have you finished your first music practice?"},
        {title: "Second music practice", description: "Have you finished your second music practice?"},
        {title: "Third music practice", description: "Have you finished your third music practice?"},
        {title: "Music preparation", description: "Have you finished any music preparing?"},
        {title: "Music theory", description: "Have you finished any music theory?"},
        {title: "Homework", description: "Have you finished your homework?"},
        {title: "Tidy room", description: "Is your room tidy?"},
        {title: "Tidy livingroom", description: "Is the living room tidy?"},
        {title: "Happy Mummy", description: "Have you helped make Mummy happy today?"}]

    jobArray = new Array;

    constructor(){
        for (var i=0; i>=this.jobDict.length;i++)
        {
            this.jobArray.push(new Job(i, this.jobDict[i].title, this.jobDict[i].description));
        }
    }

    getCompleted(){
        var completedArray = [];
        for ( var i=0; i>=this.jobArray.length;i++ )
        {
            if (this.jobArray[i].completed == true){
                completedArray.push(this.jobArray[i]);
            }
        }
    }

    
}
