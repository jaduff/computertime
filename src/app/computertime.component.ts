import { Component } from '@angular/core';
import { ComputertimeService } from './computertime.service';
import { Input } from '@angular/core';

@Component({
    selector: 'computertime',
    templateUrl: './computertime.component.html'
})
export class ComputertimeComponent {
    computertimeservice = new ComputertimeService();
    
    @Input() currentJob = this.computertimeservice.jobArray[0];

    onClick($event){
        var _event = $event;
        ()=>{
                    console.log("here");
            if (_event.target.value == "yes")
            {
                this.currentJob.complete();
                console.log("yes");
            }
            this.currentJob = this.computertimeservice.jobArray[this.currentJob.id+1];
        }
        //console.log("after");
    }
}