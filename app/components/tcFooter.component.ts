'use strict';

import { Component, Input } from 'angular2/core';

@Component({
    selector: 'tc-footer',
    templateUrl: 'app/components/tcFooter.template.html'
})
export class TcFooter {
    constructor() {
        this.year = new Date().getFullYear().toString();
    }
    
    @Input()
    company: string;
    
    year: string;
}