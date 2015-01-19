var $ = require('jquery');
window.$ = window.jQuery = window.jquery = $;
require('jquery.facedetection');
var imageDiff = require('imagediff');

//Variables
var count = 0,
    canvas;

$('#primera').faceDetection({
  complete: function(face){
    completed(face,$(this));
  }
});

$('#segunda').faceDetection({
  complete: function(face){
    completed(face,$(this));
  }
});

function completed(faces,img){
  for(var i = 0; i < faces.length; i++){
    var left = faces[i].x,
        top = faces[i].y,
        width = faces[i].width,
        height = faces[i].height;

    var div = $('<div/>',{
      'class' : 'face',
      'css':{
        'width': width,
        'height' : height,
        'display' : 'inline-block',
        'background-image' : 'url('+$(img).attr('src')+')',
        'background-position-x' : -left+'px',
        'background-position-y' : -top+'px'
      }
    });

    $('body').append(div);

  }

}

