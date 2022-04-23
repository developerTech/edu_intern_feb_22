let city = "amSterDaM"

undefined
city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'

city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(4)
'e'
city.charAt(-1)
''
city.at(0)
'a'
city.at(-1)
'M'
city.at(-2)
'a'

var a = "kevin"
var b = "Kevin"
a == b
false

a.toLowerCase() == b.toLowerCase()
true

var a = "venice"
undefined
a.slice(1)
'enice'
a.slice(2)
'nice'
a.slice(2,5)
'nic'
a.slice(1,5)
'enic'
a.slice(-1)
'e'
a.slice(-2)
'ce'
a.slice(0,-1)
'venic'
a.slice(0,-2)
'veni'
a.slice(1,-2)
'eni'
a.slice(-2,1)
''

let city = "amSterDaM"
undefined
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.charAt(0).toUpperCase()
'AA'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
city = "paRIs"
'paRIs'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "   Nikita.  "
undefined
a.trin()
VM1154:1 Uncaught TypeError: a.trin is not a function
    at <anonymous>:1:3
(anonymous) @ VM1154:1
a.trim()
'Nikita.'
var a = "   Nikit .  "
undefined
a.trim()
'Nikit .'

var a= "i am learning javascript"
a.replace('javascript','JS')
'i am learning JS'

var a= "javascript i am learning javascript"
a.replace('javascript','JS')
'JS i am learning javascript'
a
'javascript i am learning javascript'
a.replace(/javascript/g,'JS')
'JS i am learning JS'
var a = "   Nikit .  "
undefined
a.replace(/ /g,'')
'Nikit.'