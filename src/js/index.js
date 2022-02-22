import $ from "jquery";

export function jqLogic() {
  $(".menu li ul").hide();
  $("li li:has(li)").find("a:first").addClass("arrow");
  $("li").hover(
    function () {
      $(this).addClass("active");
      $("ul:first", this).fadeIn();
    },
    function () {
      $(this).removeClass("active");
      $("ul:first", this).fadeOut();
    }
  );
}
