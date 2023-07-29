var a = ['A', 'B', 'C']

a.forEach(function (element, index, self) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    self[index] = 1;
    console.log(element + ', index = ' + index);
});