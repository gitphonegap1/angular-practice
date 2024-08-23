export const throttler = (func:any, limit: any) =>{
    let lastFn:any;
    let lastRun:any;
  
    return function(){
      let context:any = globalThis as any;
      let args = arguments;
      if(!lastFn){
        func.apply(context, args);
        lastRun = Date.now()
      }else{
        clearTimeout(lastFn);
        lastFn = setTimeout(()=>{
          if((Date.now() - lastRun) >= limit){
            func.apply(context, args);
            lastRun = Date.now()
          }
        }, limit - (Date.now() - lastRun))
      }
    }
  
  }