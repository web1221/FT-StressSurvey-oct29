var counter = function(arr) {
  for (var i = 0; i < arr.length; i++) {
  total += arr[i]
  }
}
var mentalSymptomsArray = [];
$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    var add = function(number){
      var total = 0;
      total += number;
    }

    $("input:checkbox[name=mental-symptoms]:checked").each(function(){
      var mentalSymptoms = parseInt($(this).val());
      mentalSymptomsArray.push(mentalSymptoms);
      console.log("mentalSymptomsArray: ", mentalSymptomsArray)
      console.log(counter(mentalSymptomsArray));
      // console.log(counter(mentalSymptoms));
      // console.log("typeof mentalSymptoms: ", typeof(mentalSymptoms));
      // console.log("Mental Symptons Value: ", (add(mentalSymptoms)));
      $(".mentalSymptoms").append(mentalSymptoms + "<br>");

    });
  });
});
