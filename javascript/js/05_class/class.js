// クラスを定義する
class Product {
  // コンストラクタを使ってインスタンス化するときに初期化する
  constructor(name,price,category) {
    // インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // メソッドを定義する
  describe() {
    console.log('この商品名は' + this.name + 'です。' + '値段は' + this.price +'です。' + 'カテゴリは' + this.category + 'です。');
  }
}

// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();
coffee.describe();

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします！');
  }
}

// メソッドを呼び出す（実行する）
user.greet();

console.log('■ 番外編')
console.log(Object.keys(shampoo)); // shampooのオブジェクトに何があるかを知る方法　
console.log(Object.values(shampoo)); // 値も全部見る
console.log(Object.entries(shampoo)); // セットでみる方法