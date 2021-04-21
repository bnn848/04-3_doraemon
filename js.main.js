' use strict';
{

function countDown() {
  // 1sごとに更新する
  setInterval(() =>{
    
    const now = moment(); // 現在時刻
    const birthday = moment('2112-09-03'); // ドラえもん誕生
    const left = birthday.diff(now); // 差分をms単位で取得
    
    // 取得した差分msを分割？
    let year = moment.duration(left).years();
    let month = moment.duration(left).months();
    let day = moment.duration(left).days();
    let hour = moment.duration(left).hours();
    let minute = moment.duration(left).minutes();
    let second = moment.duration(left).seconds();
    
    // 分割した各要素をp要素のtextに埋め込み
    document.querySelector('p').textContent = `${year}年${month}月${day}日${hour}時間${minute}分${second}秒`;
    
  },1000);
}

// ここで実行
countDown();
}