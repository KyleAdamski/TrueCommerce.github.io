'use strict';

import { Component, Input } from 'angular2/core';

@Component({
    selector: 'tc-tile',
    templateUrl: 'app/components/tcTile.template.html'
})
export class TcTile {
    @Input()
    title: string;
    
    @Input()
    description: string;
    
    @Input('image-url')
    imageUrl: string;
    
    @Input()
    disabled: boolean;
    
    @Input('button-action-label')
    buttonActionLabel: string;
    
    @Input('action-url')
    actionUrl: string;
    
    @Input('button-info-label')
    buttonInfoLabel: string;
    
    @Input('button-info-url')
    buttonInfoUrl: string;
}
