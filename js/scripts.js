function Mountain(mountain, elevation) {
  this.mountain = mountain;
  this.elevation = elevation;
}
// user interface logic
$(document).ready(function() {
  $("form#new-mountain").submit(function(event) {
    event.preventDefault();

    var inputtedMountain = $("input#new-mountain-name").val();
    var inputtedElevation = $("input#new-elevation").val();

    var newMountain = new Mountain(inputtedMountain, inputtedElevation);

    $("ul#mountain").append("<li><span class='mountain'>" + newMountain.mountain + "</span></li>");

    $(".mountain").last().click(function() {
      $("#show-mountain").show();
      $("#show-mountain h2").text(newMountain.mountain);
      $(".mountain-name").text(newMountain.mountain);
      $(".elevation").text(newMountain.elevation);
    });

    $("input#new-mountain-name").val("");
    $("input#new-elevation").val("");
  });
});
