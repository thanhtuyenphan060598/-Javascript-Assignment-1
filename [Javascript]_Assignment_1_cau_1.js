// Câu 1: Arguments và object (50đ)
// Thiết kế hàm customCalc, nhận vào không giới hạn tham số các chữ số, trả về 1 objet chứa các thuộc tính sau:
//  - max: số lớn nhất trong các tham số
//  - min: số nhỏ nhất trong các tham số
//  - avg: số trung bình của các tham số
//  - sum: tổng của các tham số

//cau 1
const customCalc = function () {
  const obj = {
    max: arguments[0],
    min: arguments[0],
    sum: 0,
    avg: 0,
  };
  for (number of arguments) {
    if (number >= obj.max) {
      obj.max = number;
    }
    if (number <= obj.min) {
      obj.min = number;
    }
    obj.sum += number;
  }
  obj.avg = obj.sum / arguments.length;
  return obj;
};
console.log(customCalc(4, 7, 32, 6, 3, 6, 22, 44));

