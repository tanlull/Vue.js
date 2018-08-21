Test on POSTMAN
---Add 
method: POST  http://127.0.0.1:3000/contacts/add
HEADER : Content-Type =  application/json
BODY : Raw
["firstName":"Tanya123","LastName":"Sattaya"}

--- Update
method: PUT http://127.0.0.1:3000/contacts/update

{    
    "criteria":    {"firstName": "Tanya123"}
,
    "data":{"firstName": "Tanya123456","LastName": "HelloWorld"}
}


-- Delete
method: DELETE  http://127.0.0.1:3000/contacts/delete
{"firstName":"Tanya123aaa"}
