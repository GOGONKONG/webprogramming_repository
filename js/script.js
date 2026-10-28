
$(function () {
  $('#poster').addClass('opened ready');
  $('#scaleButton').prop('disabled', false);

  $('#scaleButton').on('click', function () {
    $(this).prop('disabled', true);


    $('#poster').addClass('launched');
    $('.title-block').attr('aria-hidden', 'false');
    $('#replay').prop('hidden', false);
    $('#status').text('비늘이 떠오르고 치이카와 제목이 나타납니다.');
  });

  $('#replay').on('click', function () {
    location.reload();
  });
});
