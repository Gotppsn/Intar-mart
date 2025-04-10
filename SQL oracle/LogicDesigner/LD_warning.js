var errorItems = [];

function run(input) {
    valdate(input);

    var errorInfo = {
        "error": errorItems.lenght > 0,
        "errorMessage": "An input validation error has occurred.",
        "errorItems": errorItems
    };
    return errorInfo;
}

//Implement input validation for screen items.
function valdate(input) {
    var errorItemInfo = {};
    Debug.console('************** 入力チェックプログラム ****************');

    var errorMessage = '';

    var sendParam = input.sendParam;
    var formaParam = input.formaParam;
    var workflowParameter = input.workflowParameter;

    if (formaParam["temporaryFlag"] === "1") {
        // 【Process button: Temporary save when pressed】
        // No input validation is performed

    } else if (formaParam["temporaryFlag"] === "0") {
        //Input Validation Program（auth1-auth7)
        if (workflowParameter["imwPageType"] === "4") {
            if (workflowParameter["imwNodeId"] === "auth1" || workflowParameter["imwNodeId"] === "auth2" ||
                workflowParameter["imwNodeId"] === "auth3" || workflowParameter["imwNodeId"] === "auth4" ||
                workflowParameter["imwNodeId"] === "auth5" || workflowParameter["imwNodeId"] === "auth6" ||
                workflowParameter["imwNodeId"] === "auth7") {
                if (isBlank(sendParam["rdo_judge_u"])) {
                    errorItems.push({
                        inputId: ['rdo_judge_u'],
                        errorMessage: '"審査結果"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["rdo_sales"])) {
                    errorItems.push({
                        inputId: ['rdo_sales'],
                        errorMessage: '"営業戦略上開示可能か"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["rdo_kokunai"])) {
                    errorItems.push({
                        inputId: ['rdo_kokunai'],
                        errorMessage: '"国内技術状開示可能か"を入力して下さい'
                    });
                }
                //sel_paris(gt4)
                var tableData = sendParam.gt4;
                for (var index = 0; index < tableData.length; index++) {
                    //Input Validation Program（gt4）
                    let tableRow = sendParam.gt4;
                    if (isBlank(tableRow[index].sel_paris)) {
                        errorItems.push({
                            inputId: ["sel_paris"],
                            errorMessage: '"パターンK PARIS登録状況"を入力して下さい',
                            index: index
                        });
                    }
                }
                //sel_patern(gt4)
                for (var index2 = 0; index2 < tableData.length; index2++) {
                    //Input Validation Program（gt4）
                    let tableRow = sendParam.gt4;
                    if (isBlank(tableRow[index2].sel_patern)) {
                        errorItems.push({
                            inputId: ["sel_patern"],
                            errorMessage: '"配合パターン"を入力して下さい',
                            index: index2
                        });
                    }
                }
            }
        }
        //Input Validation Program（auth9)
        if (workflowParameter["imwPageType"] === "4") {
            if (workflowParameter["imwNodeId"] === "auth9") {
                if (isBlank(sendParam["rdo_judge2_g2"])) {
                    errorItems.push({
                        inputId: ['rdo_judge2_g2'],
                        errorMessage: '"担当者 審査結果"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_judge_g_22"])) {
                    errorItems.push({
                        inputId: ['str_judge_g_22'],
                        errorMessage: '"担当者名"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_date_judge2_g2"])) {
                    errorItems.push({
                        inputId: ['str_date_judge2_g2'],
                        errorMessage: '"担当者審査日"を入力して下さい'
                    });
                }
            }
        }

        //Input Validation Program（auth10)
        if (workflowParameter["imwPageType"] === "4") {
            if (workflowParameter["imwNodeId"] === "auth10") {
                if (isBlank(sendParam["rdo_judge2_g"])) {
                    errorItems.push({
                        inputId: ['rdo_judge2_g'],
                        errorMessage: '"審査結果"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_judge_g_2"])) {
                    errorItems.push({
                        inputId: ['str_judge_g_2'],
                        errorMessage: '"審査者"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_date_judge2_g"])) {
                    errorItems.push({
                        inputId: ['str_date_judge2_g'],
                        errorMessage: '"審査日"を入力して下さい'
                    });
                }
            }
        }

        //Input Validation Program（auth11)
        if (workflowParameter["imwPageType"] === "4") {
            if (workflowParameter["imwNodeId"] === "auth11") {
                if (isBlank(sendParam["rdo_judge_g"])) {
                    errorItems.push({
                        inputId: ['rdo_judge_g'],
                        errorMessage: '"審査結果"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_judge_g"])) {
                    errorItems.push({
                        inputId: ['str_judge_g'],
                        errorMessage: '"審査者"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_date_judge_g"])) {
                    errorItems.push({
                        inputId: ['str_date_judge_g'],
                        errorMessage: '"審査日"を入力して下さい'
                    });
                }
            }
        }
        //Input Validation Program（auth13)
        if (workflowParameter["imwPageType"] === "4") {
            if (workflowParameter["imwNodeId"] === "auth13") {
                if (isBlank(sendParam["rdo_judge_g2"])) {
                    errorItems.push({
                        inputId: ['rdo_judge_g2'],
                        errorMessage: '"審査結果"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_judge_g2"])) {
                    errorItems.push({
                        inputId: ['str_judge_g2'],
                        errorMessage: '"審査者"を入力して下さい'
                    });
                }
                if (isBlank(sendParam["str_date_judge_g2"])) {
                    errorItems.push({
                        inputId: ['str_date_judge_g2'],
                        errorMessage: '"審査日"を入力して下さい'
                    });
                }
            }
        }
    }
}