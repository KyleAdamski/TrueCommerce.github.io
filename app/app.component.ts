'use strict';

import { Component } from 'angular2/core';
import { TcFooter } from './components/tcFooter.component';
import { TcJumbotron } from './components/tcJumbotron.component';
import { TcSectionTitle } from './components/tcSectionTitle.component';
import { TcTile } from './components/tcTile.component';
import { TcTiles } from './components/tcTiles.component';

@Component({
    selector: 'tc-app',
    directives: [TcFooter, TcJumbotron, TcSectionTitle, TcTile, TcTiles],
    templateUrl: 'app/app.template.html'
})
export class AppComponent {
    
}