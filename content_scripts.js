const DIFF_HORIZON = 50;
const DIFF_VERTICAL = 50;

const BIG_SIZE = "200px";

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

// happy-catの表示タグ
const body = document.body;
const stalker = document.createElement('img');
const url = chrome.runtime.getURL("resources/happy.gif");
stalker.src = url;
stalker.id = "stalker";

// imgタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.position = 'fixed';
    stalker.style.top = e.clientY - DIFF_VERTICAL + 'px';
    stalker.style.left = e.clientX - DIFF_HORIZON + 'px';
});


//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hov_');

        if (stalker.classList.contains('hov_')) {
          stalker.style.top = e.clientY - DIFF_VERTICAL*2 + 'px';
          stalker.style.left = e.clientX - DIFF_HORIZON*2 + 'px';
        }
    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}

if (body) {
    body.appendChild(stalker);
}