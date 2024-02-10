// ポップアップテスト
const body = document.body;
const happyCat = document.createElement('img');

happyCat.src = chrome.runtime.getURL("resources/happy.gif");

if (body) {
  body.appendChild(happyCat);
}