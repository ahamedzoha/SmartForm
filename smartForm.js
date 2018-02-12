// Your jQuery goes here

var userData = {
  name:'',
  email:'',
};
$("#start").click(function(){
  $("#welcome").hide();
  $("#q1").show();
});

$("#name").change(function(event){
  //console.log(event);
  console.log($("#name").val());
});
$("#q1next").click(function(){
  if($('#name').val() && $('#email').val()){
    userData.name = $('#name').val();
    userData.email = $('#email').val();
    console.log(userData);
    $("#q2").show();
    $("#q1").hide();
  }else {
    alert("Please enter name and email");
  }
});
