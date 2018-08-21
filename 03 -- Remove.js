// Remove only first record
db.test.remove({age:30},{"justOne":true})

// Remove all Records
db.test.remove({age:30})
