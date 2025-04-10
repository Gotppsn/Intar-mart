SELECT 
    R.ROLE_NAME,
    D.DEPARTMENT_NAME,
    D.DEPARTMENT_CD,
    D.DEPARTMENT_SET_CD,
    CASE 
        WHEN M.MATTER_STATUS = 'approve' THEN 'approve'
        WHEN T.USER_STATUS = 'apply' THEN 'apply'
        ELSE NULL 
    END AS STATUS
FROM 
    B_M_ACCOUNT_ROLE_B AR
    JOIN B_M_ROLE_B R ON AR.ROLE_ID = R.ROLE_ID
    LEFT JOIN (
        SELECT 
            DA.USER_CD,
            D.DEPARTMENT_NAME,
            D.DEPARTMENT_CD,
            DA.DEPARTMENT_SET_CD
        FROM 
            IMM_DEPARTMENT_ATH DA
            JOIN IMM_DEPARTMENT D ON DA.DEPARTMENT_CD = D.DEPARTMENT_CD
        WHERE 
            DA.USER_CD = /*user_cd*/''
            AND D.LOCALE_ID = 'ja'
    ) D ON AR.USER_CD = D.USER_CD
LEFT JOIN (
    SELECT 
        SYSTEM_MATTER_ID,
        'approve' as MATTER_STATUS
    FROM 
        IMW_T_CPL_MATTER
    WHERE 
        SYSTEM_MATTER_ID = /*matterid*/''
        AND (UPDATE_USER_CODE = /*user_cd*/'' OR CREATE_USER_CODE = /*user_cd*/'')
) M ON 1=1
    LEFT JOIN (
        SELECT 
            CREATE_USER_CODE,
            'apply' as USER_STATUS
        FROM 
            IMW_T_CPL_USER
        WHERE 
            SYSTEM_MATTER_ID = /*matterid*/''
            AND CREATE_USER_CODE = /*user_cd*/''
    ) T ON AR.USER_CD = T.CREATE_USER_CODE
WHERE 
    AR.USER_CD = /*user_cd*/''