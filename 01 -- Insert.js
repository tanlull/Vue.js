use test

db.student.insert([
{FirstName:"Tanya1",LastName:"Sattaya1",childName:"Bingo"},
{Name:"Tanya2",LastName:"Sattaya2"},
{FirstName:"Tanya3",LastName:"Sattaya3",},
{FirstName:"Tanya4",LastName:"Sattaya4",Age:20}
])

db.student.find({Age:20})


