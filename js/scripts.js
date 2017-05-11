function Activity(activity,time){
 this.activitiy=activity;
 this.time=time;
}

$(document).ready(function(){
 $("form#new-activities").submit(function(event){
   event.preventDefault();

   var inputtedactivity=$("input#new-activity").val();
   var inputtedtime=$("input#new-time").val();

   var newActivity= new Activity(inputtedactivity, inputtedtime);

   $("ul#activities").append("<li><span class='activities'>" + inputtedactivity + " - " + inputtedtime  + "</span></li>");
   $(".activities").last().click(function(){
     $("ul#completed-activities").append("<li><span class='activities'>" + inputtedactivity + " - " + inputtedtime  + "</span></li>");
     $("btnRemove").click(function(){
       $("#tasks").eq(5).remove();
     });
   });

   $("input#new-activity").val("");
   $("input#new-time").val("");
 });
});
