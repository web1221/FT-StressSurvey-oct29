$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=mental-symptoms]:checked").each(function(){
      var mentalSymptoms = $(this).val();
      console.log("Mental Symptons Value: ", mentalSymptoms);
      $(".mentalSymptoms").append(mentalSymptoms + "<br>");
      alert("Connected!");
    });
  });
});
