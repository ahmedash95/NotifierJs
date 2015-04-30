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


$('#default').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: 'Notifier',
    // timeOut: 3,
  });
});


$('#timer').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: 'it will close After 3 Seconds',
    timeOut: 3,
  });
});


$('#show').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: 'Notifier',
    show: function(){
      alert('Hi i\'m Showing Now :D');
    }
  });
});


$('#close').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: '',
    close: function(){
      alert('Your Are Closed Me :\'( ');
    }
  });
});


$('#click').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: 'Notifier',
    click: function(){
      alert('You Are Clicked Me :)');
    }
  });
});


$('#error').click(function(){
  notifi({
    title: 'Notifier ',
    icon: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/43.Bell-128.png',
    body: '',
    error: function(){
      alert('Sorry For the Error :( ');
    }
  });
});



});