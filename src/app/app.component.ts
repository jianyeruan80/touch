  // app/app.component.ts
  
  import { Component } from '@angular/core';
  import { DragulaService } from 'ng2-dragula';
import {SortableDirective} from './sortable.directive'

  @Component({
    
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
  })
  export class AppComponent {
    
public clicked: Array<Number> = [1,2,3,4,5,6];
    

 /* public onclick(key): void
    this.clicked[key] = true;
    setTimeout(() => 
      this.clicked[key] = false;
    }, 2000);
  }
}*/
indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  order = [...this.indices];
  
  orderChanged(order) {
    this.order = order;
  }

 constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      //this.onDrag(value.slice(1));
      //console.log(1,value.slice(1));
     // console.log(this.clicked)
    }
    );
    dragulaService.drop.subscribe((value) => {
     // this.onDrop(value.slice(1));
     //console.log(2,value.slice(1));
  ///  console.log(this.clicked)
    });
    dragulaService.over.subscribe((value) => {
      //this.onOver(value.slice(1));
     //	 console.log(3,value);
      //console.log(this.clicked)
    
    });
    dragulaService.out.subscribe((value) => {
      //this.onOut(value.slice(1));
     // console.log(4,value.slice(1));
    console.log(this.clicked)
    });
  }

      SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  
      avatars = [
          {
              name: 'kristy',
              image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
              visible: true
          },
          {
              name: 'matthew',
              image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
              visible: false
          },
          {
              name: 'chris',
              image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
              visible: false
          },
          {
              name: 'jenny',
              image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
              visible: false
          }
      ];
      test(event){
      	alert(event.direction)
      }
      swipe(currentIndex: any, action: any = this.SWIPE_ACTION.RIGHT) {
          console.log(action);
          if (currentIndex > this.avatars.length || currentIndex < 0) return;
  
          let nextIndex = 0;
          
          // next
          if (action === this.SWIPE_ACTION.RIGHT) {
              const isLast = currentIndex === this.avatars.length - 1;
              nextIndex = isLast ? 0 : currentIndex + 1;
          }
  
          // previous
          if (action === this.SWIPE_ACTION.LEFT) {
              const isFirst = currentIndex === 0;
              nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
          }
  
          // toggle avatar visibility
          this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
      }
  }

/*http://hammerjs.github.io/recognizer-swipe/*/