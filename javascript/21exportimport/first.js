let dbObj = { }

dbObj.user = [
    {
        name:'Alvin',
        city:'Boston'
    },
    {
        name:'Priya',
        city:'Chandigarh'
    }
]

dbObj.dbquery = {
    find:function(table){return `Select * from ${table}`},
    insert:function(table,data){return `insert into ${table} name,city ${data.name},${data.city}`}
}

//es5
module.exports = dbObj
//es6
//export default dbObj;