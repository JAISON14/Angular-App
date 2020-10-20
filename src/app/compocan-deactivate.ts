import {Observable} from 'rxjs';

export interface CompocanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>
}
