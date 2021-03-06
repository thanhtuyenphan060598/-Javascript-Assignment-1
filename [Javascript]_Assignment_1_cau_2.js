
// Câu 2: Callback
// 2a (40đ)
// Thiết kế hàm customFilter (có chức năng y như prototype filter của array), nhận vào tham số thứ nhất là mảng cần lọc, tham số thứ 2 là hàm callback dùng để lọc điều kiện.
// Hàm callback sẽ được gọi nhiều lần, tương ứng với số phần tử của mảng. Mỗi lần gọi hàm callback sẽ đưa vào 2 đối số, thứ nhất là giá trị của phần tử đang xét và thứ 2 là chỉ số index của phần tử đó trong mảng, nếu hàm callback trả về true thì phần tử sẽ được nhận, ngược lại sẽ bị loại.
// Hàm customFilter sẽ trả về mảng mới đã được lọc.
// Gợi ý:
//  - Tạo mới 1 mảng.
//  - Chạy vòng lặp dể duyệt qua từng phần tử trên mảng cần lọc.
//  - Mổi lần duyệt, gọi tới hàm callback với 2 đối số là giá trị và chỉ số index của phần tử, nếu hàm callback trả về true, thêm phần tử hiện tại vào mảng đã tạo.
//  - Trả về mảng đã tạo.
// 2b (10đ)
// Dùng hàm vừa thiết kế, lọc ra các phần tử là số chẵn trong mảng sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//cau 2a

const customFilter = function (arr, callback) {
  const newArray = [];

  if (!Array.isArray(arr) && typeof callback !== "function") return;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callback(arr[i], i)) {
      newArray.push(element);
    }
  }
  return newArray;
};
console.log(
  customFilter([2, 7, 33, 64, 4], function (value) {
    return value > 5;
  })
);

//cau 2b

console.log(
  customFilter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
    return value % 2 === 0;
  })
);
