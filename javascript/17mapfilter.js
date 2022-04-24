> map is use to iterate over the array
> map always return the same length of output as input array
> it is use to apply logics(Add,mul,sub,div)

var a = [4,5,9,3,23,21,34,37,56,8,76,85,12,47,32]

a.map((data) => {return data*2})

[8, 10, 18, 6, 46, 42, 68, 74, 112, 16, 152, 170, 24, 94, 64]

var a = [4,5,9]
a.map((item) => {return `<p>${item}</p>`})
['<p>4</p>', '<p>5</p>', '<p>9</p>']

a.map((data) => {return data>30})
(15) [false, false, false, false, false, false, true, true, true, false, true, true, false, true, true]

> filter is use to filter out the data
> it may or may not return the same length of output
> it only return those values for which condition or output is true

var a = [4,5,9,3,23,21,34,37,56,8,76,85,12,47,32]
a.filter((data) => {return data>30})
[34, 37, 56, 76, 85, 47, 32]

var a = [-1,1,0,1,2,3]
a.map((data) => {return data*2})
[-2, 2, 0, 2, 4, 6]

var a = [-1,1,0,1,2,3]
a.filter((data) => {return data*2})
[-1, 1, 1, 2, 3]