import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from 'app/store';
import { INCREMENT } from 'app/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select((s:IAppState)=> s.counter) localCounter;
 
  constructor(private _ngRedux : NgRedux<IAppState>){
  }

  increment(){
    this._ngRedux.dispatch({type:INCREMENT});
  }

}
