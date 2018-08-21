db.test.find({score:{$gt:60}})
db.test.find({score:{$gte:60}})
db.test.find({score:{$lt:60}})
db.test.find({score:{$lte:60}})

//OR
db.test.find({$or:[{major:"Computer Science"},{subject:"Math II"}]})

//AND
db.test.find({"$and":[ {"major":"Computer Science"}, {"score":{"$gt":80}}]})

//NOT
db.test.find({major:{$not:{$eq:"Computer Science"}}})

//Where
db.orderProduct.insert([
{"item":"jacket","qty":5,"inStock":5}
,{"item":"polo","qty":20,"inStock":10}
,{"item":"t-shirt","qty":3,"inStock":99}
])

db.orderProduct.find({$where:function(){return this.qty > this.inStock;} })



//major in computer science and Information technology
//subject is Physics
//score <60 or score >79

db.test.find({
"major": { "$in": ["Computer Engineer", "Inforemation Technology"] }
, "subject": "Physics"
, "$or": [{ "score": { "$lt": 60 } },{ "score": { "$gt": 79 } }]
})



// wildcard search --> use RegExp

db.test.insert({"name":"S23",
"classDates":["Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"]}
)

db.test.find({subject:null})
db.test.find({"major" : /tion/})
db.test.find({classDates:{$size:5}})
db.test.find({name:"S23"},{classDates:{"$slice":[2,2]}})
db.test.find({classDates:{$all:["Monday","Friday"]}})
