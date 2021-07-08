import { Observable, of, from } from 'rxjs';

//const button=document.querySelector('button');

const btnEmit = document.getElementById('emit');
const btnError = document.getElementById('error');
const btnComplete = document.getElementById('complete');
const btnCancel = document.getElementById('cancel');
const btnPrint = document.getElementById('print');

//observables are lazy -> need to subscribe
const observable = new Observable(function(subscriber) {
  subscriber.next('first value');
  btnEmit.onclick = function() {
    subscriber.next('hello hello');
  };
  btnError.onclick = function() {
    subscriber.error("i'have a bad feeling about this");
  };  
  btnComplete.onclick = function() {
    subscriber.complete();
  };
});

btnCancel.onclick = function() {
  subscription.unsubscribe();
};
btnPrint.onclick = () => console.log(subscription);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log('completed');
  }
});
