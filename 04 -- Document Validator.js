db.createCollection( "customers",{
validator: { $and:
[
{ idCardNo: { $exists: true,$type:"string" } },
{ firstName: { $exists: true,$type:"string" } },
{ lastName: { $exists: true,$type:"string" } },
{ registeredDate: { $exists: true,$type:"date" } },
{ sex: { $in: [ "M", "F" ] } },
{ email:{ $regex: /@mongodb\.com$/ }},
{ mobileNo:{ $regex: /^\(\d\d\d\)\d\d\d-\d\d\d\d$/ }}
]
},
validationAction: "error"
}
)


