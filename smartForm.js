// Your jQuery goes here

var userData = {
  name:'',
  email:'',
  html:{likes:[], dislikes:[]},
  css:{likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
  strength: {css:'', js:'', html:''},
  currentQuestion: '#welcome',
};
if(localStorage.getItem('userData')){
  userData = JSON.parse(localStorage.getItem('userData'));
  $('#welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
}else{
  localStorage.setItem('userData', JSON.stringify(userData));
}
$("#start").click(function(){
  $("#welcome").hide();
  $("#q1").show();
  userData.currentQuestion = '#q1';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#name").change(function(event){
  //console.log(event);
  //console.log($("#name").val());
});

$("#q1next").click(function(){
  if($('#name').val() && $('#email').val()){
    userData.name = $('#name').val();
    userData.email = $('#email').val();
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
    $("#q2").show();
    $("#q1").hide();
  }else {
    alert("Please enter name and email");
  }
});

$("#q2HTML").click(function(){
  $("#q2").hide();
  $("#q2a").show();
});
$("#q2CSS").click(function(){
  $("#q2").hide();
  $("#q2b").show();
});
$("#q2JS").click(function(){
  $("#q2c").show();
  $("#q2").hide();
});
$("#q2back").click(function(){
  $("#q2a").hide();
  $("#q2").show();

})
