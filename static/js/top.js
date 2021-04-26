// チェックボックスをチェック
var checkBoxCheck = function() {
  var checkbox_e = document.form.elements['お問い合わせ項目'];
  for( var i = 0; i < checkbox_e.length; i++ ) {
    if( checkbox_e[i].checked ) {
      return true;
    }
  }

  return false;
}

// テキスト関連をチェック
var textCheck = function() {
  var flag = true;
  var text_a = [
    {
      err_id:'#err_company',
      form:'form_company'
    },
    {
      err_id:'#err_name',
      form:'form_name'
    },
    {
      err_id:'#err_email',
      form:'form_email'
    },
    {
      err_id:'#err_confirm_email',
      form:'form_confirm_email'
    }
  ];

  for( val in text_a ) {
    if(document.getElementById(text_a[val].form).value === '') {
      $(text_a[val].err_id).addClass('is-active');
      flag = false;
    } else {
      $(text_a[val].err_id).removeClass('is-active');
    }
  }

  return flag;
}

document.addEventListener('DOMContentLoaded', function() {
"use strict";
  /*
  フォーム処理
  */
  $('#mailformpro').submit(function(){
    var flag = true;

    // テキスト関連をチェック
    var flag = textCheck();

    // チェックボックスをチェック
    var resultCheckBox = checkBoxCheck();

    if ( resultCheckBox === false ) {
      $('#err_inquiry').addClass('is-active');
      flag = false;
    } else {
      $('#err_inquiry').removeClass('is-active');
    }

    // チェック結果判定
    if( flag === true ) {
      return true;
    }

    var pos = $('#err').addClass('is-active').offset().top;
    pos-=100; // 微調整(ヘッダーがあるため)
    // エラー文言に移動
    $(window).scrollTop(pos);
    return false;
  });

  /*
  ニュース一覧表示処理
  */
  $('#news_trigger').click(function(){
    $('#news').toggleClass('is-active');
    $('#news_target').slideToggle(300);
  });

  /* モーダル */
  $('.js-modal').magnificPopup({
    type: 'inline'
  });

  /* メニュー選択処理 */
  $('.js-navLink').click(function(){
    // ハンバーガーメニュー形を変える
    $('#HamburgerMenu').removeClass('is-active');
    // ナビゲーション非表示
    $('#nav').slideUp(250);
  });


});

/* 地図 */
var lat = 35.6957533; // 緯度
var lng = 139.7815892; // 経度
var zoom = 17;
function initMap() {
  // 地図埋め込み
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { // 地図の中心を指定
      lat: lat,
      lng: lng
    },
    zoom: zoom // 地図のズームを指定
  });

  // マーカー埋め込み
  var marker = new google.maps.Marker({
    map: map ,
    position: new google.maps.LatLng( lat, lng ) ,
    icon: './assets/images/top/icon-map-01.png',
  });

}