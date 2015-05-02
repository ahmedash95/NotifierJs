$(document).ready(function(){

// Check If Browser Support Notification
 if (!Notification) {
    alert('Please us a modern version of Chrome, Firefox, Opera or Firefox.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();

function notifi(args){

  if(!args.title) args.title = '';

  var notifi = new Notification(args.title,{
    icon: args.icon,
    body: args.body
  });
  notifi.onclick = args.click;
  notifi.onshow  = args.show;
  notifi.onclose = args.close;
  notifi.onerror = args.error;

  if(args.timeOut){
    notifi.onshow = function(){
    setTimeout(notifi.close.bind(notifi), (args.timeOut * 1000));
    }
  }

}



});
