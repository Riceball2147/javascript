console.log('■forの練習')
// 変数num5に0～4までのランダムな整数を代入する
let num5 = Math.floor(Math.random() * 5);

// 変数num5の最初の値を出力する（確認用）
console.log('最初の値は' + num5 + 'です');

// 変数num5の値が0以外である間、変数num5の値を出力し続ける
while (num5 !== 0) {
  // 変数num5に0～4までのランダムな整数を再代入する
  num5 = Math.floor(Math.random() * 5);

  // 次の条件式で比較される、変数num5の現在の値を出力する
  console.log('現在の値は' + num5 + 'です');
}

// 1～10までの数値を順番に出力する
for (let i = 1; i <= 10; i++) {
  console.log(i);
}