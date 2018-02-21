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

function validateEmail(email){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

$("#q1next").click(function(){
  var isValid = false;
  var isEmpty = true;
  if($('#name').val() && $('#email').val()) isEmpty = false;
  if(!isEmpty){
    userData.name = $('#name').val().trim();
    userData.email = $('#email').val();
    var emailIsValid = validateEmail(userData.email);
    if(emailIsValid){
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData);
      $("#q2").show();
      $("#q1").hide();
    }else{
      alert("Invalid Email");
    }
  }else {
    alert("Please enter name and email");
  }
});

$("#q2HTML").click(function(){
  $("#q2").hide();
  $("#q2a").show();
});

$("#q2anext").click(function(){
  if($("#html1").val().checked)
  console.log("rhis");

  var status = $("#html1").checked;
  userData.html.likes.push($("#html1").innerText);
  console.log(status);
});

$("#q2CSS").click(function(){
  $("#q2").hide();
  $("#q2b").show();
});
$("#q2JS").click(function(){
  $("#q2c").show();
  $("#q2").hide();
});
$("#q2aback").click(function(){
  $("#q2a").hide();
  $("#q2").show();
});
$("#q2bback").click(function(){
  $("#q2b").hide();
  $("#q2").show();
});
$("#q2cback").click(function(){
  $("#q2c").hide();
  $("#q2").show();
})
