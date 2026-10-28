// HTML이 준비되면 아래 코드를 실행합니다.
$(function () {
  // opened 클래스가 붙으면 CSS animation으로 파도와 인물이 양옆으로 이동합니다.
  $('#poster').addClass('opened ready');
  $('#scaleButton').prop('disabled', false);

  // 비늘 버튼을 클릭할 때마다 뒤의 함수를 실행합니다.
  $('#scaleButton').on('click', function () {
    // 같은 버튼을 여러 번 누르지 못하게 비활성화합니다.
    $(this).prop('disabled', true);

    // launched 클래스 하나로 비늘 상승과 제목 등장을 시작합니다.
    // 움직이는 방법과 시간차는 모두 style.css에 작성했습니다.
    $('#poster').addClass('launched');
    $('.title-block').attr('aria-hidden', 'false');
    $('#replay').prop('hidden', false);
    $('#status').text('비늘이 떠오르고 치이카와 제목이 나타납니다.');
  });

  // 다시 보기를 누르면 페이지를 새로 불러와 처음부터 실행합니다.
  $('#replay').on('click', function () {
    location.reload();
  });
});
