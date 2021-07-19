//ある時刻
var time : number = Math.floor(+process.argv[2]);
//開始時刻
const startTime : number = Math.floor(+process.argv[3]);
//終了時刻
var endTime : number = Math.floor(+process.argv[4]);

// エラー処理
function checkTime(num : number, str : String) {
    if (num > 23 || num < 0) {
        console.log(`${str}は0~23にして下さい`);
        process.exit(1);
    }
    if (Number.isNaN(num)) {
        console.log(`${str}は数字を入力してください`);
        process.exit(1);
    }
}

checkTime(time, "指定時刻");
checkTime(startTime, "開始時刻");
checkTime(endTime, "終了時刻");

// 入力値を表示
console.log(`指定時刻は${time}\n開始時刻は${startTime}\n終了時刻は${endTime}`);

// 開始時刻と終了時刻が同じ場合
if (startTime == endTime) {
    if (startTime == time && endTime == time) {
        console.log("true");
    } else {
        console.log("false");  
    }
}

// 開始時刻よりも終了時刻の値がが大きい場合
if (startTime < endTime) {
    if (time >= startTime) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// 開始時刻よりも終了時刻の値が小さい場合
if (startTime > endTime) {
    // 計算処理
    if (time >= startTime) {
    } else {
        time = time + 24;
    }
    endTime = endTime + 24;
    
    // 出力
    if (startTime <= time && time < endTime) {
        console.log("true");
    } else {
        console.log("false");
    }
}