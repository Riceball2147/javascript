console.log('■ whileの練習');
// 変数numに0～4までのランダムな整数を代入する
let num4 = Math.floor(Math.random() * 5);
// 変数numの最初の値を出力する（確認用）
console.log('最初の値は' + num4 + 'です');

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num4 !== 0) {
   // 変数numに0～4までのランダムな整数を再代入する
  num4 = Math.floor(Math.random() * 5);
   // 次の条件式で比較される、変数numの現在の値を出力する
  console.log(num4);
}