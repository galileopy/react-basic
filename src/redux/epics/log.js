import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { Log } from '../actions';

const log = (action$, state$) =>
  action$.pipe(ofType(Log.type), tap(console.log), ignoreElements());

export default log;
