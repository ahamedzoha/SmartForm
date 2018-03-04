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
  $("#welcome").hide(500);
  $("#q1").show();
  userData.currentQuestion = '#q1';
  localStorage.setItem('userData', JSON.stringify(userData));
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
      userData.currentQuestion = '#q2';
      $("#q1").hide(500);

    }else{
      alert("Invalid Email");
    }
  }else {
    alert("Please enter name and email");
  }
  userData.currentQuestion = '#q2';
  localStorage.setItem('userData', JSON.stringify(userData));
});



$("#q2HTML").click(function(){
  $("#q2").hide(500);
  $("#q2a").show();
  userData.currentQuestion = '#q2a';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2aback").click(function(){
  $("#q2a").hide(500);
  $("#q2").show(500);
  userData.currentQuestion = '#q2';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2anext").click(function(){
  userData.html.likes.length = 0;
  userData.html.dislikes.length = 0;

  $(".htmlLike:checked").each(function(){
    userData.html.likes.push($(this).parent().text().trim());
  });
  $(".htmlDislike:checked").each(function(){
    userData.html.dislikes.push($(this).parent().text().trim());
  });
  if ((userData.html.likes.length != 0 || userData.html.dislikes !=0) && (userData.css.likes.length !=0 || userData.css.dislikes.length !=0) && (userData.js.likes.length !=0 || userData.js.dislikes.length !=0)) {
    $("#q2a").hide(500);
    $("#q3").show(500);
    userData.currentQuestion = '#q3';
  } else {
    $("#q2a").hide(500);
    $("#q2b").show(500);
    userData.currentQuestion = '#q2b';
  }
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log(userData);
});

$("#q2CSS").click(function(){
  $("#q2").hide(500);
  $("#q2b").show(500);
  userData.currentQuestion = '#q2b';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2bback").click(function(){
  $("#q2b").hide(500);
  $("#q2").show(500);
  userData.currentQuestion = '#q2';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2bnext").click(function(){
  userData.css.likes.length = 0;
  userData.css.dislikes.length = 0;

  $(".cssLike:checked").each(function(){
    userData.css.likes.push($(this).parent().text().trim());
  });
  $(".cssDislike:checked").each(function(){
    userData.css.dislikes.push($(this).parent().text().trim());
  });

  //localStorage.setItem('userData', JSON.stringify(userData));
  console.log(userData);

  if ((userData.html.likes.length != 0 || userData.html.dislikes !=0) && (userData.css.likes.length !=0 || userData.css.dislikes.length !=0) && (userData.js.likes.length !=0 || userData.js.dislikes.length !=0)) {
    $("#q2b").hide(500);
    $("#q3").show(500);
    userData.currentQuestion = '#q3';
  }else{
    $("#q2b").hide(500);
    $("#q2c").show(500);
    userData.currentQuestion = '#q2c';
  }
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2JS").click(function(){
  $("#q2c").show(500);
  $("#q2").hide(500);
  userData.currentQuestion = '#q2c';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2cback").click(function(){
  $("#q2c").hide(500);
  $("#q2").show(500);
  userData.currentQuestion = '#q2';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q2cnext").click(function(){
  userData.js.likes.length = 0;
  userData.js.dislikes.length = 0;

  $(".jsLike:checked").each(function(){
    userData.js.likes.push($(this).parent().text().trim());
  });
  $(".jsDislike:checked").each(function(){
    userData.js.dislikes.push($(this).parent().text().trim());
  });

  //localStorage.setItem('userData', JSON.stringify(userData));
  console.log(userData);

  if ((userData.html.likes.length != 0 || userData.html.dislikes !=0) && (userData.css.likes.length !=0 || userData.css.dislikes.length !=0) && (userData.js.likes.length !=0 || userData.js.dislikes.length !=0)) {
    $("#q2c").hide(500);
    $("#q3").show(500);
    userData.currentQuestion = '#q3';
  }else{
    $("#q2").show(500);
    $("#q2c").hide(500);
    userData.currentQuestion = '#q2';
  }
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q3back").click(function(){
  $("#q3").hide(500);
  $("#q2").show(500);
  userData.currentQuestion = '#q2';
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#q3next").click(function(){
  userData.strength.html = $("input[name=inlineRadioOptions1]:checked").val();
  userData.strength.css = $("input[name=inlineRadioOptions2]:checked").val();
  userData.strength.js = $("input[name=inlineRadioOptions3]:checked").val();
  userData.currentQuestion = '#thanks';
  $("#q3").hide(500);
  $("#thanks").show(500);
  localStorage.setItem('userData', JSON.stringify(userData));
});
