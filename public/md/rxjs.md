### RxJs
---

**What is the fullform of RxJs**

Reactive extension Javascript

**What is the purpose of RxJs?**

Main goal is to handle the Asynchronous data streams.
Let's esume there is an entity which emits the asynchronous data streams and it can be any type of data. We have listener out here who is intrested to listen async data. Rxjs helps us to handle javascript async program very easily .
    
**What are the observables and observer?**

Observable is an RxJs object which actually emits data streams.
Observer is nothing but the function which is the subscribe to the observable and listen to the data stream and returns the data stream.

**Explain the use of Subscribe with sample code.**

``` typescript
function AsyncStream(observer){
    var t1 = setInterval(()=>{
        observer.next(Math.random())
    })
}
var observ = Observable.create(AsyncStream);
observ.subscribe(res=>Listener(res));
function Listener(res){
    console.log(res)
}
```