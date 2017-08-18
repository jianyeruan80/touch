import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DragulaModule } from 'ng2-dragula';
import {SortableDirective} from './sortable.directive'
export class MyHammerConfig extends HammerGestureConfig  {
/*  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }*/
   overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20, direction: 31}
    }
}

@NgModule({
  imports:      [ BrowserModule,DragulaModule ],
  declarations: [ AppComponent,SortableDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [ { 
                    provide: HAMMER_GESTURE_CONFIG, 
                    useClass: MyHammerConfig 
                } ]
})

export class AppModule { }