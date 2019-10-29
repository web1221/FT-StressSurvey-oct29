var counter = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}
var mentalHealthArray = [];
$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    // var add = function(number){
    //   var total = 0;
    //   total += number;
    // }

    $("input:checkbox[name=mental-symptoms]:checked").each(function(){
      var mentalSymptoms = parseInt($(this).val());
      mentalHealthArray.push(mentalSymptoms);
      console.log("mentalHealthArray: ", mentalHealthArray);
      // console.log(counter(mentalSymptoms));
      // console.log("typeof mentalSymptoms: ", typeof(mentalSymptoms));
      // console.log("Mental Symptons Value: ", (add(mentalSymptoms)));
      $(".mentalSymptoms").append(mentalSymptoms + "<br>");

    });
    $('input:checkbox[name=physical-symptoms]:checked').each(function() {
      var physicalSymptoms = parseInt($(this).val());
      mentalHealthArray.push(physicalSymptoms);
      $('.physicalSymptoms').append(physicalSymptoms + "<br>");
    });

    $('input:checkbox[name=relaxation-techniques]:checked').each(function(){
      var relaxationTechniques = parseInt($(this).val());
      mentalHealthArray.push(relaxationTechniques);
      $('.relaxationTechniques').append(relaxationTechniques + "<br>");
    })
  });
});
