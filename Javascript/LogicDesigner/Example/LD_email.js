// Path: emailTemplate.js
function run(input) {
    let emailTemplate =
    "関係者各位\n" +
    "\n" +
    "回答欄の添付をご覧ください。\n" +
    "社外に配布する際は大容量ファイル送受信サービス（HENNGE）を利用してください。 \n" +
    "https://npamart001.accel-mart.com/imart/im_workflow/common/switch/switch_content_detail?imwPageType=7&imwUserDataId=8h9nc5xr5ihj1y9&imwSystemMatterId=ma_8h9nd91vpivjqy9 \n" +
    "\n" +
    "案件番号: " +
    input.aut_no +
    "\n" +
    "企業名: " +
    input.hid_title +
    "\n" +
    "申請日: " +
    input.dat_apply.toISOString().split('T')[0].replace(/-/g, '/') +
    "\n" +
    "URL: " +
    input.url;
    
    emailTemplate += "\n\n【SDS情報】\n";
    
    var dataFilename = input.datafilename || [];
    var dataDocid = input.datadocid || [];
    var dataFileid = input.datafileid || [];
    
    // Direct debug
    Debug.console("Files count:", dataFilename.length);
    
    var chemicalMap = {};
    
    // Simple iteration - handle each file
    for (var i = 0; i < dataFilename.length; i++) {
        var filename = dataFilename[i];
        var docid = dataDocid[i];
        var fileid = dataFileid[i];
        
        // Debug each iteration
        Debug.console("Processing: ", i, filename, docid, fileid);
        
        // Extract chemical name from filename (before the + character)
        var parts = filename.split('+');
        var chemicalName = parts[0].trim();
        
        // Determine language from filename
        var language = "JP";
        if (filename.indexOf("JP") !== -1) {
            language = "JP";
        } else if (filename.indexOf("EN") !== -1) {
            language = "EN";
        } else if (filename.indexOf("CN") !== -1) {
            language = "CHN";
        }
        
        // Initialize chemical entry if doesn't exist
        if (!chemicalMap[chemicalName]) {
            chemicalMap[chemicalName] = {};
        }
        
        // Store document info by language
        chemicalMap[chemicalName][language] = {
            docid: docid,
            fileid: fileid
        };
    }
    
    // Output the results
    var isFirst = true;
    for (var chemical in chemicalMap) {
        if (!isFirst) {
            emailTemplate += "\n-----------------------------------------\n";
        }
        
        emailTemplate += "製品名 : " + chemical + "\n";
        
        var languages = chemicalMap[chemical];
        
        if (languages.JP) {
            emailTemplate += "URL  (JP): https://npamartdev001.accel-mart.com/imart/quickbinder/document/file/pdf/original/" + 
                            languages.JP.docid + "/" + languages.JP.fileid + "\n";
        }
        
        if (languages.EN) {
            emailTemplate += "URL  (EN): https://npamartdev001.accel-mart.com/imart/quickbinder/document/file/pdf/original/" + 
                            languages.EN.docid + "/" + languages.EN.fileid + "\n";
        }
        
        if (languages.CHN) {
            emailTemplate += "URL  (CHN): https://npamartdev001.accel-mart.com/imart/quickbinder/document/file/pdf/original/" + 
                            languages.CHN.docid + "/" + languages.CHN.fileid + "\n";
        }
        
        isFirst = false;
    }
    
    return {
        message: emailTemplate
    };
}