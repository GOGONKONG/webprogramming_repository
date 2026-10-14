
console.log("complete");

// 고양이랑 풀숲 배경 조정해보기
$(document).on("mousemove", function (event) {

    // 1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    $(".bg-img").css(
        "object-position",
        `${mouseX / 10}% ${mouseY / 10}%`
    );


    // 2. 마우스 커서에 고양이 이미지 따라다니게 하기

    let imgWidth = $(".cat-img").width();
    let imgHeight = $(".cat-img").height();

    $(".cat-img").css("left", mouseX - imgWidth + "px");
    $(".cat-img").css("top", mouseY - imgHeight + "px");

});
