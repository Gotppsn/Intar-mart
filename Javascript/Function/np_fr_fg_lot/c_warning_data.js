(function($) {
    // Required text fields (first 6 rows)
    var requiredTextFields = ["入力者　製造係担当者", "入力者　品管担当者", "製造日付", "タンク名", "数量", "配合パターン"];
    
    // All rows requiring select validation
    var selectValidationRows = [
        "製造方法通りに作業が行えるか",
        "投入作業（時間や方法）は適切か", 
        "攪拌時間は適切か", 
        "温度条件は適切か", 
        "攪拌回転数は適切か",
        "異常発熱",
        "異常発砲",
        "原料が固化・分離する場合",
        "新規・専用原料がある場合",
        "その他",
        "製造後の洗浄性は良いか",
        "入目は妥当か",
        "荷姿は妥当か",
        "製品充填時の発泡状況",
        "濾過時に問題ないか",
        "作業環境での問題点",
        "製造後５日の保管サンプル状態",
        "その他の問題点"
    ];
    
    function validateForm() {
        var missingValues = false;
        var warningMessages = [];
        
        // Validate text inputs for required fields
        $(".row-list-block .sortable-tr").each(function() {
            var $row = $(this);
            var rowName = getRowName($row);
            
            if (!rowName || !requiredTextFields.includes(rowName)) return;
            
            var $input = $row.find("td:nth-child(3) input[type='text']");
            var input1 = $input.val() || "";
            
            if (input1.trim() === "") {
                missingValues = true;
                warningMessages.push("[" + rowName + "] を入力してください。");
                $row.find("td:nth-child(3)").addClass("state-error-td");
                $input.addClass("imfr_item_input_error");
            } else {
                $row.find("td:nth-child(3)").removeClass("state-error-td");
                $input.removeClass("imfr_item_input_error");
            }
        });
        
        // Validate select boxes for specific rows
        $(".row-list-block .sortable-tr").each(function() {
            var $row = $(this);
            var rowName = getRowName($row);
            
            if (!rowName) return;
            
            // Check if current row is in the validation list
            var shouldValidate = selectValidationRows.some(name => rowName.includes(name));
            if (!shouldValidate) return;
            
            var $selectCell = $row.find("td:nth-child(2)");
            var $select = $selectCell.find("select[name='chiba_check1']");
            var selectValue = $select.val() || "";
            
            if (selectValue === "") {
                missingValues = true;
                warningMessages.push("[" + rowName + "] の選択肢を選んでください。");
                $selectCell.addClass("state-error-td");
                $select.addClass("imfr_item_input_error");
            } else {
                $selectCell.removeClass("state-error-td");
                $select.removeClass("imfr_item_input_error");
            }
        });
        
        if (missingValues) {
            imuiShowErrorMessage(warningMessages.join("<br>"));
            return false;
        }
        
        // If all validations pass, set the current date to chiba1
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var dd = String(today.getDate()).padStart(2, '0');
        var formattedDate = yyyy + '/' + mm + '/' + dd;
        
        var args = {};
        args.data = {};
        args.data.chiba1 = formattedDate;
        formaItems.product_72_textbox.setItemData.chiba1(args);
        
        return true;
    }
    
    function getRowName($row) {
        // Try to get span text first
        var $span = $row.find("td:first-child a div span");
        if ($span.length > 0) {
            return $span.text().trim();
        }
        
        // Try to find text in nested divs
        var text = "";
        $row.find("td:first-child a div").each(function() {
            var divText = $(this).clone().children().remove().end().text().trim();
            if (divText) {
                text += divText + " ";
            }
        });
        
        if (text.trim()) {
            return text.trim();
        }
        
        // Fallback to cell text
        return $row.find("td:first-child").text().trim();
    }
    
    function collectTableData() {
        var dataStringParts = [];
        
        $(".row-list-block .sortable-tr").each(function() {
            var $row = $(this);
            var rowName = getRowName($row);
            
            if (!rowName) return;
            
            var check1 = $row.find("td:nth-child(2) select[name='chiba_check1']").val() || "";
            var input1 = $row.find("td:nth-child(3) input[type='text']").val() || "";
            var check2 = $row.find("td:nth-child(4) select[name='chiba_check2']").val() || "";
            var input2 = $row.find("td:nth-child(5) input[type='text']").val() || "";
            var check3 = $row.find("td:nth-child(6) select[name='chiba_check3']").val() || "";
            var input3 = $row.find("td:nth-child(7) input[type='text']").val() || "";
            
            dataStringParts.push("[name: " + rowName + 
                              ", check1: \"" + check1 + 
                              "\", input1: \"" + input1 + 
                              "\", check2: \"" + check2 + 
                              "\", input2: \"" + input2 + 
                              "\", check3: \"" + check3 + 
                              "\", input3: \"" + input3 + "\"]");
        });
        
        var finalDataString = dataStringParts.join(",");
        var args = {data: {}};
        args.data.hid_inputbox = finalDataString;
        formaItems.product_72_hidden.setItemData.hid_inputbox(args);
        
        return finalDataString;
    }
    
    window.validateTableForm = function() {
        collectTableData();
        return validateForm();
    };
    
    $(document).ready(function() {
        $(document).on("change", "input[name^='chiba_text'], select[name^='chiba_check']", function() {
            collectTableData();
            validateForm();
        });
        
        setTimeout(function() {
            collectTableData();
            validateForm();
        }, 300);
    });
    
    window.collectIMTableData = collectTableData;
})(jQuery);