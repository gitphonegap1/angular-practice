import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class TestService {
    store: BehaviorSubject<any> = new BehaviorSubject<any>('');

    get data():any{
        return this.store;
    }

    set data(value:any){
        this.store.next(value);
    }

    get storeObservable(){
        return this.store.asObservable();
    }
}