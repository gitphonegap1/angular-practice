import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class DataTrans{
    private store: BehaviorSubject<any> = new BehaviorSubject<any>('');

    get data():any {
        return this.store.value;
    }

    set data(value:any){
        this.store.next(value);
    }

    get storeObservable():any{
        return this.store.asObservable();
    }
}