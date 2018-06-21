import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../../models/Navigation';


@Component({
  selector: 'app-entity-navigation',
  templateUrl: './entity-navigation.component.html',
  styleUrls: ['./entity-navigation.component.css']
})
export class EntityNavigationComponent implements OnInit {
    id: string = "nav-accordion-" + Math.floor(Math.random() * 10000);
    endMultiplicityMapping = [
        {
            name: "1",
            value: "->"
        },
        {
            name: "0..1",
            value: "->"
        },
        {
            name: "0..*",
            value: "+-> 0..*"
        },
        {
            name: "1..*",
            value: "+-> 0..*"
        }
    ]

    constructor() {
       
    }

  ngOnInit() {
  }

    @Input() navigations: Array<Navigation>;
    @Input() header: string;
    @Input() entityNames: Array<string>;

    @Output() subscribe: EventEmitter<any> = new EventEmitter();


    changeInEntity() {
        this.subscribe.emit();
    }

    addNavigation() {
        this.navigations.push(new Navigation(null));
    }
}
