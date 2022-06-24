import  { Component } from '@angular/core';
import { TestService } from './test.service';
@Component({
    selector:'test',
    template: `<h2>{{"ff"}}</h2>
    <ul>
        <li *ngFor="let c of r">
            {{c}}
        </li>
    </ul>
    
    `
})
export class test{
    r=['1'];
constructor(service:TestService)
{
    
    this.r=service.getCourses();
}
}