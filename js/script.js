//헤더 메뉴 누르면 스크롤 되는 기능
$(function () {
    $('.gnb a').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');

        // 대상 섹션이 없으면 종료
        if ($(target).length === 0) return;

        const targetPos = $(target).offset().top;
        const headerHeight = 0; // 고정 헤더 높이

        $('html, body').animate({
            scrollTop: targetPos - headerHeight
        }, 600);
    });
});

setInterval(function(){

    $(".slide").delay(3000);
    $(".slide").animate({
        marginLeft: "-1920px"
    }, 1000);

    $(".slide").delay(3000);
    $(".slide").animate({
        marginLeft: "-3840px"
    }, 1000);

    $(".slide").delay(3000);
    $(".slide").animate({
        marginLeft: "-5760px"
    }, 1000);

    $(".slide").animate({
        marginLeft: "0px"
    }, 0);
}, 3000);

//section2
// 카테고리 버튼
const categoryButtons = document.querySelectorAll('.menu_category li');
// 메뉴 리스트들
const menuLists = document.querySelectorAll('.menu_list');

categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // 👈 클릭 시 페이지 상단으로 튀는 기본 동작 방지!

        // 모든 버튼 active 제거
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // 클릭한 버튼 active 추가
        button.classList.add('active');

        // 선택된 카테고리값
        const selected = button.dataset.category;

        // 모든 메뉴 목록 숨기기
        menuLists.forEach(list => {
            list.style.display = 'none';
        });

        // 해당 카테고리만 보여주기
        const targetList = document.querySelector(`.menu_list[data-category="${selected}"]`);
        if (targetList) {
            targetList.style.display = 'inline-flex';
        }
    });
});

$(function () {

    const showPos = 500; // 이 픽셀 이상 내려가면 보이기

    // 스크롤 시 TOP 버튼 표시/숨김
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > showPos) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    // TOP 버튼 클릭 시 부드럽게 상단 이동
    $('#topBtn').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

});