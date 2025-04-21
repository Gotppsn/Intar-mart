//Copy & Open with GridTable Support
$(document).ready(function () {
    //Get regular form items
    var mst_rapidreason = formaItems.product_72_textarea.getItemData.mst_rapidreason();
    var chk_rapid = formaItems.product_80_checkbox.getItemData.chk_rapid();
    var autoNoRefer = $("input[name='auto_no']").val();
    var strLinkRefer = $("input[name='url']").val();
    var rdo_tokuisaki = formaItems.product_80_radio.getItemData.rdo_tokuisaki();
    var sfl_tokuisaki = formaItems.product_80_itemSelect.getItemData.sfl_tokuisaki();
    var sfl_tokuijigyosho = formaItems.product_80_itemSelect.getItemData.sfl_tokuijigyosho();
    var str_tokuisaki = formaItems.product_72_textbox.getItemData.str_tokuisaki();
    var str_tokuijigyosho = formaItems.product_72_textbox.getItemData.str_tokuijigyosho();
    var mst_riyu = formaItems.product_72_textarea.getItemData.mst_conf2_2();
    var mst_tsushin = formaItems.product_72_textarea.getItemData.mst_tsushin();
    var mst_product_id = formaItems.product_72_textarea.getItemData.mst_product_id();
    var sfl_link = formaItems.product_80_itemSelect.getItemData.sfl_link();
    var rdo_conf2_4 = formaItems.product_80_radio.getItemData.rdo_conf2_4();
    var mst_other2 = formaItems.product_72_textarea.getItemData.mst_other2();

    //Get grid table data
    var gridColumns = ["seihin_nm", "seihin_shtname", "seihin_star", "seihin_realname", "seihin_senyo", "seihin_setday2", "seihin_chgday2", "seihin_ver", "seihin_yakuhinkubun", "seihin_endday2", "seihin_kubun"];
    var gridData = [];
    
    try {
        gridData = formaItems.product_80_gridtable.getItemData.gt1("", gridColumns);
        console.log("Grid data retrieved, rows: " + gridData.length);
    } catch(e) {
        console.error("Error retrieving grid data:", e);
    }

    // Get selectbox
    var sel_copywf = $('input[name="hid_sel_copywf2"]').val();

    //clearItem - add grid data
    function CopyRemove() {
        localStorage.removeItem('mst_rapidreason');
        localStorage.removeItem('chk_rapid');
        localStorage.removeItem('auto_no_refer');
        localStorage.removeItem('str_link_refer');
        localStorage.removeItem('rdo_tokuisaki');
        localStorage.removeItem('sfl_tokuisaki');
        localStorage.removeItem('sfl_tokuijigyosho');
        localStorage.removeItem('str_tokuisaki');
        localStorage.removeItem('str_tokuijigyosho');
        localStorage.removeItem('mst_riyu');
        localStorage.removeItem('mst_tsushin');
        localStorage.removeItem('mst_product_id');
        localStorage.removeItem('mst_conf2_2');
        localStorage.removeItem('sfl_link');
        localStorage.removeItem('rdo_conf2_4');
        localStorage.removeItem('mst_other2');
        localStorage.removeItem('gridTableData'); // Add grid data removal
    }

    //setItem - add grid data
    function CopyClick() {
        localStorage.setItem('mst_rapidreason', mst_rapidreason);
        localStorage.setItem('chk_rapid', chk_rapid);
        localStorage.setItem('auto_no_refer', autoNoRefer);
        localStorage.setItem('str_link_refer', strLinkRefer);
        localStorage.setItem('rdo_tokuisaki', rdo_tokuisaki);
        localStorage.setItem('sfl_tokuisaki', sfl_tokuisaki);
        localStorage.setItem('sfl_tokuijigyosho', sfl_tokuijigyosho);
        localStorage.setItem('str_tokuisaki', str_tokuisaki);
        localStorage.setItem('str_tokuijigyosho', str_tokuijigyosho);
        localStorage.setItem('mst_riyu', mst_riyu);
        localStorage.setItem('mst_tsushin', mst_tsushin);
        localStorage.setItem('mst_product_id', mst_product_id);
        localStorage.setItem('mst_conf2_2', mst_riyu);
        localStorage.setItem('sfl_link', sfl_link);
        localStorage.setItem('rdo_conf2_4', rdo_conf2_4);
        localStorage.setItem('mst_other2', mst_other2);
        
        // Store grid data as JSON string
        localStorage.setItem('gridTableData', JSON.stringify(gridData));
    }

    //Start Get
    CopyRemove();
    CopyClick();

    // Create targetFlow
    var targetFlow = $("#sel_copywf2").val();

    // Create form
    var form = document.createElement('form');
    form.id = 'np';
    if (sel_copywf === "") {
        form.action = 'https://npamartdev001.accel-mart.com/imart/im_workflow/user/apply/apply_direct/' + targetFlow;
    }
    if (targetFlow === "") {
        form.action = 'https://npamartdev001.accel-mart.com/imart/im_workflow/user/apply/apply_direct/' + sel_copywf;
    }
    form.method = 'POST';
    form.target = (new Date()).getTime();

    document.body.append(form);

    // Open new window
    var myWindow = window.open("about:blank", form.target, "width=1000, height=800 ,noopener='yes',noreferrer='yes'");

    // Focus on the new window
    myWindow.focus();

    // Submit form
    form.submit();

    // Delete form
    form.remove();

    // Check if the new window has fully loaded its elements
    var checkInterval = setInterval(function () {
        try {
            if (myWindow.document.readyState === "complete" && myWindow.document.querySelector('textarea[name="mst_rapidreason"]')) {
                clearInterval(checkInterval);
                console.log("New window fully loaded and textarea found. Injecting script...");

                // Inject and execute script in the new window
                myWindow.eval(`
    function SetItemData() {
        const itemMappings = [
            { key: 'mst_rapidreason', target: formaItems.product_72_textarea.setItemData },
            { key: 'chk_rapid', target: formaItems.product_80_checkbox.setItemData },
            { key: 'auto_no_refer', target: formaItems.product_72_textbox.setItemData },
            { key: 'str_link_refer', target: formaItems.product_72_textbox.setItemData },
            { key: 'rdo_tokuisaki', target: formaItems.product_80_radio.setItemData },
            { key: 'sfl_tokuisaki', target: formaItems.product_80_itemSelect.setItemData },
            { key: 'sfl_tokuijigyosho', target: formaItems.product_80_itemSelect.setItemData },
            { key: 'str_tokuisaki', target: formaItems.product_72_textbox.setItemData },
            { key: 'str_tokuijigyosho', target: formaItems.product_72_textbox.setItemData },
            { key: 'mst_riyu', target: formaItems.product_72_textarea.setItemData },
            { key: 'mst_tsushin', target: formaItems.product_72_textarea.setItemData },
            { key: 'mst_product_id', target: formaItems.product_72_textarea.setItemData },
            { key: 'mst_conf2_2', target: formaItems.product_72_textarea.setItemData },
            { key: 'sfl_link', target: formaItems.product_80_itemSelect.setItemData },
            { key: 'rdo_conf2_4', target: formaItems.product_80_radio.setItemData },
            { key: 'mst_other2', target: formaItems.product_72_textarea.setItemData },
        ];

        // Set regular form fields
        itemMappings.forEach(({ key, target }) => {
            try {
                const value = localStorage.getItem(key) || "";
                const args = { data: { [key]: value.toString() } };
                target[key](args);
                console.log(\`Set field: \${key}\`);
            } catch (error) {
                console.error(\`Error setting \${key}:\`, error);
            }
        });
        
        // Set grid table data
        try {
            const gridDataStr = localStorage.getItem('gridTableData');
            if (gridDataStr) {
                const gridData = JSON.parse(gridDataStr);
                if (Array.isArray(gridData) && gridData.length > 0) {
                    const args = { data: { gt1: gridData } };
                    formaItems.product_80_gridtable.setItemData.gt1(args, {});
                    console.log(\`Set grid table with \${gridData.length} rows\`);
                }
            }
        } catch (gridError) {
            console.error("Error setting grid data:", gridError);
        }

        console.log("All items set successfully");
    }

    (function () {
        console.log("Script started in new window");
        var checkTextArea = setInterval(function () {
            var textArea = document.querySelector('textarea[name="mst_rapidreason"]');
            var responseInput = document.querySelector('input[name="imfr_response_type"]');
            if (textArea && responseInput) {
                clearInterval(checkTextArea);
                
                if (responseInput.value === "REGISTRATION") {
                    console.log("REGISTRATION mode detected, setting data");
                    SetItemData();
                } else {
                    console.warn("Not in REGISTRATION mode");
                }
            }
        }, 500);
    })();
`);
            }
        } catch (error) {
            console.error("Error checking window state:", error);
        }
    }, 500);
});