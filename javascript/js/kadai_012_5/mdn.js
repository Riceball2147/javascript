const now = new Date();

const japanTime = now.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

console.log(japanTime);

console.log('年月日日時を記載する')

const now2 = new Date();

const formatter = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

const parts = formatter.formatToParts(now2);

const result =
  `${parts.find(p => p.type === 'year').value}年` +
  `${parts.find(p => p.type === 'month').value}月` +
  `${parts.find(p => p.type === 'day').value}日 ` +
  `${parts.find(p => p.type === 'hour').value}時` +
  `${parts.find(p => p.type === 'minute').value}分` +
  `${parts.find(p => p.type === 'second').value}秒`;

console.log(result);