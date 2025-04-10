var errorItems = [];

function run(input) {
    errorItems = [];
    validate(input);
    
    return {
        "error": false, // Explicitly set to false as requested
        "errorMessage": "入力チェックエラーが発生しました。",
        "errorItems": errorItems
    };
}

function validate(input) {
    var sendParam = input.sendParam;
    var inputBoxData = sendParam["hid_inputbox"];
    
    if (!inputBoxData) return;
    
    var requiredFields = [
        "入力者　製造係担当者", 
        "入力者　品管担当者", 
        "製造日付", 
        "タンク名", 
        "数量", 
        "配合パターン"
    ];
    
    var rowMap = {};
    requiredFields.forEach(function(field, index) {
        rowMap[field] = index;
    });
    
    var regex = /\[name:\s*(.*?),\s*input1:\s*(.*?),\s*input2:\s*(.*?),\s*input3:\s*(.*?)\]/g;
    var match;
    
    while ((match = regex.exec(inputBoxData)) !== null) {
        var name = match[1].trim();
        var input1 = match[2].trim().replace(/^"|"$/g, '');
        
        if (requiredFields.indexOf(name) !== -1 && isBlank(input1)) {
            errorItems.push({
                inputId: ["chiba_text1"],
                errorMessage: "[" + name + "] を入力してください。",
                index: rowMap[name]
            });
        }
    }
}

function isBlank(value) {
    return value === undefined || value === null || value === "" || value === '""';
}