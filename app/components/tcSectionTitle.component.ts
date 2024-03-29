'use strict';

import { Component, Input } from 'angular2/core';

@Component({
    selector: 'tc-section-title',
    styles: [`
        h3 {
            color: #FFFFFF;
        }
    `],
    templateUrl: 'app/components/tcSectionTitle.template.html'
})
export class TcSectionTitle {
    @Input()
    title: string;
}