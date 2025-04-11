// Data collection script
(function($) {
    function collectTableData() {
        var dataStringParts = [];
        
        // Process each row in the table
        $(".row-list-block .sortable-tr").each(function() {
            var $row = $(this);
            var rowName = "";
            
            // Get row name from first cell
            var $firstCell = $row.find("td:first-child a div span");
            if ($firstCell.length > 0) {
                rowName = $firstCell.text().trim();
            } else {
                // Fallback
                rowName = $row.find("td:first-child").text().trim();
            }
            
            if (!rowName) return;
            
            // Get input values
            var input1 = $row.find("td:nth-child(3) input[type='text']").val() || "";
            var input2 = $row.find("td:nth-child(5) input[type='text']").val() || "";
            var input3 = $row.find("td:nth-child(7) input[type='text']").val() || "";
            
            dataStringParts.push("[name: " + rowName + ", input1: \"" + input1 + "\", input2: \"" + input2 + "\", input3: \"" + input3 + "\"]");
        });
        
        var finalDataString = dataStringParts.join(",");
        
        // Update hidden field
        var args = {data: {}};
        args.data.hid_inputbox = finalDataString;
        formaItems.product_72_hidden.setItemData.hid_inputbox(args);
        
        return finalDataString;
    }
    
    $(document).ready(function() {
        $(document).on("change", "input[name='chiba_text1'], input[name='chiba_text2'], input[name='chiba_text3']", function() {
            collectTableData();
        });
        
        collectTableData();
    });
    
    window.collectIMTableData = collectTableData;
})(jQuery);