module.exports=(sequenlize,Datatypes)=>sequenlize.define('user',{
    name:Datatypes.STRING,
    mobile:Datatypes.STRING,
    email:{
       type: Datatypes.STRING,
        unique:true
    },
    password:Datatypes.STRING
})
