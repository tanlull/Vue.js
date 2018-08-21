var fs = require('fs');
function readTotalLines(filePath, callback1) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        var to_string = data.toString();
        var split_lines = to_string.split("\n");

        total_char =0;
        for(i=0;i<split_lines.length;i++){
            total_char += split_lines[i].length;
        }
        callback1(split_lines.length,total_char);
    });
}
var file1 = "./data1.txt";
var file2 = "./data2.txt";
//Async
readTotalLines(file1, function (totalLines,totalChars) {
    console.log('Async file1:', totalLines," , totalChar=",totalChars);
});

readTotalLines(file2, function (totalLines) {
    console.log('Async file2:', totalLines);
});

//Sync
readTotalLines(file1, function (totalLines,totalChars) {
    console.log('Sync file1:', totalLines," , totalChar=",totalChars);
    readTotalLines(file2, function (totalLines) {
    console.log('Sync file2:', totalLines);
});
});

