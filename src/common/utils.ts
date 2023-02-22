export function throttle(func: any, ms: number) {
  let isSuspended = false;
  let savedArgs = null;
  let savedThis = null;

  return function $throttle(...args: any[]) {
    console.log('call', isSuspended, ms);
    if (isSuspended) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    isSuspended = true;
    savedArgs = null;
    savedThis = null;

    func.apply(this, args);

    setTimeout(() => {
      isSuspended = false;
      if (savedArgs && savedThis) {
        $throttle.apply(savedThis, savedArgs);
      }
    }, ms);
  }
}
