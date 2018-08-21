db.test.insert([
{name:"S1",major:"Computer Science",subject:"Math",score:90},
{name:"S2",major:"Computer Engineer",subject:"Physics",score:75},
{name:"S3",major:"Information Technology",subject:"Physics",score:60},
{name:"S4",major:"Computer Science",subject:"Math",score:77},
{name:"S5",major:"Information Technology",subject:"Physics",score:88},
{name:"S6",major:"Information Technology",subject:"Programming I",score:65},
{name:"S7",major:"Computer Engineer",subject:"Physics",score:55},
{name:"S8",major:"Computer Science",subject:"Programming I",score:66},
{name:"S9",major:"Computer Education",subject:"Math",score:77},
{name:"S10",major:"Information Technology",subject:"Physics",score:59},
{name:"S11",major:"Computer Engineer",subject:"Programming I",score:56},
{name:"S12",major:"Computer Science",subject:"Physics",score:98},
{name:"S13",major:"Information Technology",subject:"Math",score:72},
{name:"S14",major:"Computer Engineer",subject:"Programming I",score:69},
{name:"S15",major:"Computer Engineer",subject:"Physics",score:67},
{name:"S16",major:"Computer Science",subject:"Math",score:73},
{name:"S17",major:"Computer Engineer",subject:"Physics",score:99},
{name:"S18",major:"Computer Engineer",subject:"Math",score:77},
{name:"S19",major:"Information Technology",subject:"Programming I",score:66},
{name:"S20",major:"Information Technology",subject:"Physics",score:66},
])

db.test.find({name:"S19"})

//db.test.update({"name":"S19"},{"name":"S19","score":75}) // Update but replace another value to null

db.test.find({name:"S3"})

db.test.update({name:"S3"},{"$set" : {"name":"Student 3","score":90,"subject":"Physics 2"}})  // Update only specific field

db.test.update({name:"S21"},{"name":"S21","score":75 , "major":"Statistic" , "subject":"Physics"},{"upsert":true})  // Not found then insert

db.test.update({major:"Computer Engineer"},{"$set" : {score:100}})  // Update only first record

db.test.update({major:"Computer Engineer"},{"$set" : {score:100}},{multi:true}) // Update all records 


//can insert another columns
db.test.insert({age:30})

