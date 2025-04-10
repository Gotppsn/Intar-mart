SELECT 
    a3.NODE_NAME as 製品ID,
    a4.FLOW_NAME as WINGS,
    a.imfr_ud_hid_reference as 参照,
    a.imfr_ud_hid_rapid as 至急,
    a.imfr_ud_auto_no as 申請番号,
    '' as 企業名,
    a.imfr_ud_hid_bushomei as 所属部署,
    a.imfr_ud_fun_applyuser as 起案者,
    a.imfr_ud_dat_apply as 起案日,
    a.IMFR_SD_INSERT_ID,
    a2.system_matter_id as SYSTEM_MATTER_ID,
    a.IMFR_UD_MST_RIYU as 調査目的理由,
    a.imfr_ud_hid_approve as ビュー表示項目,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_1 a
    LEFT JOIN IMFR_T_IMW_MATTER a2 ON a.IMFR_SD_INSERT_ID = a2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK a3 ON a2.system_matter_id = a3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE a4 ON a2.system_matter_id = a4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON a.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    a4.locale_id = 'ja'
UNION ALL
SELECT 
    b3.NODE_NAME,
    b4.FLOW_NAME,
    b.imfr_ud_hid_reference,
    b.imfr_ud_hid_rapid,
    b.imfr_ud_auto_no,
    '',
    b.imfr_ud_hid_bushomei,
    b.imfr_ud_fun_applyuser,
    b.imfr_ud_dat_apply,
    b.IMFR_SD_INSERT_ID,
    b2.system_matter_id,
    b.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_2 b
    LEFT JOIN IMFR_T_IMW_MATTER b2 ON b.IMFR_SD_INSERT_ID = b2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK b3 ON b2.system_matter_id = b3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE b4 ON b2.system_matter_id = b4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON b.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    b4.locale_id = 'ja'
UNION ALL
SELECT 
    c3.NODE_NAME,
    c4.FLOW_NAME,
    c.imfr_ud_hid_reference,
    c.imfr_ud_hid_rapid,
    c.imfr_ud_auto_no,
    '',
    c.imfr_ud_hid_bushomei,
    c.imfr_ud_fun_applyuser,
    c.imfr_ud_dat_apply,
    c.IMFR_SD_INSERT_ID,
    c2.system_matter_id,
    c.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_3 c
    LEFT JOIN IMFR_T_IMW_MATTER c2 ON c.IMFR_SD_INSERT_ID = c2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK c3 ON c2.system_matter_id = c3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE c4 ON c2.system_matter_id = c4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON c.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    c4.locale_id = 'ja'
UNION ALL
SELECT 
    d3.NODE_NAME,
    d4.FLOW_NAME,
    d.imfr_ud_hid_reference,
    d.imfr_ud_hid_rapid,
    d.imfr_ud_auto_no,
    '',
    d.imfr_ud_hid_bushomei,
    d.imfr_ud_fun_applyuser,
    d.imfr_ud_dat_apply,
    d.IMFR_SD_INSERT_ID,
    d2.system_matter_id,
    d.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_4 d
    LEFT JOIN IMFR_T_IMW_MATTER d2 ON d.IMFR_SD_INSERT_ID = d2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK d3 ON d2.system_matter_id = d3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE d4 ON d2.system_matter_id = d4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON d.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    d4.locale_id = 'ja'
UNION ALL
SELECT 
    e3.NODE_NAME,
    e4.FLOW_NAME,
    e.imfr_ud_hid_reference,
    e.imfr_ud_hid_rapid,
    e.imfr_ud_auto_no,
    '',
    e.imfr_ud_hid_bushomei,
    e.imfr_ud_fun_applyuser,
    e.imfr_ud_dat_apply,
    e.IMFR_SD_INSERT_ID,
    e2.system_matter_id,
    e.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_5 e
    LEFT JOIN IMFR_T_IMW_MATTER e2 ON e.IMFR_SD_INSERT_ID = e2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK e3 ON e2.system_matter_id = e3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE e4 ON e2.system_matter_id = e4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON e.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    e4.locale_id = 'ja'
UNION ALL
SELECT 
    f3.NODE_NAME,
    f4.FLOW_NAME,
    f.imfr_ud_hid_reference,
    f.imfr_ud_hid_rapid,
    f.imfr_ud_auto_no,
    '',
    f.imfr_ud_hid_bushomei,
    f.imfr_ud_fun_applyuser,
    f.imfr_ud_dat_apply,
    f.IMFR_SD_INSERT_ID,
    f2.system_matter_id,
    f.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_1 f
    LEFT JOIN IMFR_T_IMW_MATTER f2 ON f.IMFR_SD_INSERT_ID = f2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK f3 ON f2.system_matter_id = f3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE f4 ON f2.system_matter_id = f4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON f.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    f4.locale_id = 'ja'
UNION ALL
SELECT 
    g3.NODE_NAME,
    g4.FLOW_NAME,
    g.imfr_ud_hid_reference,
    g.imfr_ud_hid_rapid,
    g.imfr_ud_auto_no,
    '',
    g.imfr_ud_hid_bushomei,
    g.imfr_ud_fun_applyuser,
    g.imfr_ud_dat_apply,
    g.IMFR_SD_INSERT_ID,
    g2.system_matter_id,
    g.IMFR_UD_MST_RIYU,
    '',
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_2 g
    LEFT JOIN IMFR_T_IMW_MATTER g2 ON g.IMFR_SD_INSERT_ID = g2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK g3 ON g2.system_matter_id = g3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE g4 ON g2.system_matter_id = g4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON g.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    g4.locale_id = 'ja'
UNION ALL
SELECT 
    h3.NODE_NAME,
    h4.FLOW_NAME,
    h.imfr_ud_hid_reference,
    h.imfr_ud_hid_rapid,
    h.imfr_ud_auto_no,
    '',
    h.imfr_ud_hid_bushomei,
    h.imfr_ud_fun_applyuser,
    h.imfr_ud_dat_apply,
    h.IMFR_SD_INSERT_ID,
    h2.system_matter_id,
    h.IMFR_UD_MST_RIYU,
    h.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_3 h
    LEFT JOIN IMFR_T_IMW_MATTER h2 ON h.IMFR_SD_INSERT_ID = h2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK h3 ON h2.system_matter_id = h3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE h4 ON h2.system_matter_id = h4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON h.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    h4.locale_id = 'ja'
UNION ALL
SELECT 
    i3.NODE_NAME,
    i4.FLOW_NAME,
    i.imfr_ud_hid_reference,
    i.imfr_ud_hid_rapid,
    i.imfr_ud_auto_no,
    '',
    i.imfr_ud_hid_bushomei,
    i.imfr_ud_fun_applyuser,
    i.imfr_ud_dat_apply,
    i.IMFR_SD_INSERT_ID,
    i2.system_matter_id,
    '',
    i.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_4 i
    LEFT JOIN IMFR_T_IMW_MATTER i2 ON i.IMFR_SD_INSERT_ID = i2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK i3 ON i2.system_matter_id = i3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE i4 ON i2.system_matter_id = i4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON i.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    i4.locale_id = 'ja'
UNION ALL
SELECT 
    j3.NODE_NAME,
    j4.FLOW_NAME,
    j.imfr_ud_hid_reference,
    j.imfr_ud_hid_rapid,
    j.imfr_ud_auto_no,
    '',
    j.imfr_ud_hid_bushomei,
    j.imfr_ud_fun_applyuser,
    j.imfr_ud_dat_apply,
    j.IMFR_SD_INSERT_ID,
    j2.system_matter_id,
    j.IMFR_UD_MST_RIYU,
    j.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_5 j
    LEFT JOIN IMFR_T_IMW_MATTER j2 ON j.IMFR_SD_INSERT_ID = j2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK j3 ON j2.system_matter_id = j3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE j4 ON j2.system_matter_id = j4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON j.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    j4.locale_id = 'ja'
UNION ALL
SELECT 
    k3.NODE_NAME,
    k4.FLOW_NAME,
    k.imfr_ud_hid_reference,
    k.imfr_ud_hid_rapid,
    k.imfr_ud_auto_no,
    '',
    k.imfr_ud_hid_bushomei,
    k.imfr_ud_fun_applyuser,
    k.imfr_ud_dat_apply,
    k.IMFR_SD_INSERT_ID,
    k2.system_matter_id,
    k.IMFR_UD_MST_RIYU,
    k.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_6 k
    LEFT JOIN IMFR_T_IMW_MATTER k2 ON k.IMFR_SD_INSERT_ID = k2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK k3 ON k2.system_matter_id = k3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE k4 ON k2.system_matter_id = k4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON k.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    k4.locale_id = 'ja'
UNION ALL
SELECT 
    l3.NODE_NAME,
    l4.FLOW_NAME,
    l.imfr_ud_hid_reference,
    l.imfr_ud_hid_rapid,
    l.imfr_ud_auto_no,
    '',
    l.imfr_ud_hid_bushomei,
    l.imfr_ud_fun_applyuser,
    l.imfr_ud_dat_apply,
    l.IMFR_SD_INSERT_ID,
    l2.system_matter_id,
    l.IMFR_UD_MST_RIYU,
    l.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_7 l
    LEFT JOIN IMFR_T_IMW_MATTER l2 ON l.IMFR_SD_INSERT_ID = l2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK l3 ON l2.system_matter_id = l3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE l4 ON l2.system_matter_id = l4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON l.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    l4.locale_id = 'ja'
UNION ALL
SELECT 
    m3.NODE_NAME,
    m4.FLOW_NAME,
    m.imfr_ud_hid_reference,
    m.imfr_ud_hid_rapid,
    m.imfr_ud_auto_no,
    '',
    m.imfr_ud_hid_bushomei,
    m.imfr_ud_fun_applyuser,
    m.imfr_ud_dat_apply,
    m.IMFR_SD_INSERT_ID,
    m2.system_matter_id,
    m.IMFR_UD_MST_RIYU,
    m.IMFR_UD_MST_VIEW,
    gt2.IMFR_UD_SEIHIN_NM_2,
    gt2.IMFR_UD_WABUN_JOKYO
FROM 
    imfr_ut_np_fr_fg_pw_6_8 m
    LEFT JOIN IMFR_T_IMW_MATTER m2 ON m.IMFR_SD_INSERT_ID = m2.INSERT_ID
    LEFT JOIN IMW_T_ACTV_TASK m3 ON m2.system_matter_id = m3.system_matter_id
    LEFT JOIN IMW_T_ACTV_MATTER_LOCALE m4 ON m2.system_matter_id = m4.system_matter_id
    LEFT JOIN IMFR_UT_NP_FR_FG_PW_1_GT2 gt2 ON m.IMFR_SD_INSERT_ID = gt2.IMFR_SD_INSERT_ID AND gt2.IMFR_UD_SEIHIN_NM_2 IS NOT NULL
WHERE
    m4.locale_id = 'ja'