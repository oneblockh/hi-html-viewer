/*About:这只是一些图标和文字的替换功能*/
let hi_html_viewer_ui_menu_language=[]
let hi_html_viewer_ui_top_side_language=[]
let hi_html_viewer_ui_option_language=[]
let hi_html_viewer_ui_option_settings_language=[]
let hi_html_viewer_ui_option_about_language=[]
//语言的翻译不一定100%准确
function hi_html_viewer_app_language_简体中文_config(){
    hi_html_viewer_ui_menu_language=["打开文件","清空内容","输入URL","复制URL","拷贝文件","输入代码","粘贴代码","选项......."]
    hi_html_viewer_ui_top_side_language=["返回","前进","刷新","输入URL","菜单","全屏"]
    hi_html_viewer_ui_option_language=["选项","偏好设置","关于项目","关闭窗口"]
    hi_html_viewer_ui_option_settings_language=["偏好设置","在链接里添加UTF-8属性","顶部栏和菜单栏的透明化","应用主题偏好","框架透明化","语言","本地存储"]
    hi_html_viewer_ui_option_settings_select_option_language=["添加","不添加","透明","更透明","不透明","系统主题","浅色主题","深色主题","清空本地存储数据"]
    hi_html_viewer_ui_option_about_language=["关于项目","一个比较简单的html查看器","访问仓库","访问版本库"]
    hi_html_viewer_app_language_config()
}
function hi_html_viewer_app_language_繁體中文_config(){
    hi_html_viewer_ui_menu_language=["打開文件","清空內容","輸入URL","複製URL","拷貝文件","輸入代碼","貼上代碼","選項......."]
    hi_html_viewer_ui_top_side_language=["返回","前進","刷新","輸入URL","菜單","全螢幕"]
    hi_html_viewer_ui_option_language=["選項","偏好設定","關於項目","關閉窗口"]
    hi_html_viewer_ui_option_settings_language=["偏好設定","在連結裡添加UTF-8屬性","頂部欄和菜單欄的透明化","應用主題偏好","框架透明化","語言","本地存儲"]
    hi_html_viewer_ui_option_settings_select_option_language=["添加","不添加","透明","更透明","不透明","系統主題","淺色主題","深色主題","清空本地存儲數據"]
    hi_html_viewer_ui_option_about_language=["關於項目","一個比較簡單的html查看器","訪問倉庫","訪問版本庫"]
    hi_html_viewer_app_language_config()
}
function hi_html_viewer_app_language_english_config(){
    hi_html_viewer_ui_menu_language=["Open file","Clean","Input URL","Copy URL","Copy file","Input code","Paste code","Option..."]
    hi_html_viewer_ui_top_side_language=["Left","Right","Refresh","Input URL","Menu","Full screen"]
    hi_html_viewer_ui_option_language=["Option","Preferences","About project","Close window"]
    hi_html_viewer_ui_option_settings_language=["Preferences","Add UTF-8 attribute to the URL","Top bar and menu bar transparent","App theme","App frame transparent","language","Local storage"]
    hi_html_viewer_ui_option_settings_select_option_language=["Add","NO add","Transparent","More transparent","NO transparent","System theme","Light theme","Dark theme","Clean local storage"]
    hi_html_viewer_ui_option_about_language=["About project","A simple HTML viewer","Visit repository","Visit releases"]
    hi_html_viewer_app_language_config()
}
function hi_html_viewer_app_language_config() {
    //这是菜单栏的一些图标和文字
    //hi_html_viewer_app_language_config()
    //这是顶部栏的一些图标
    fetch('svg/left.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_left_button').innerHTML = svg);
    document.getElementById('hi_html_viewer_left_button').title=hi_html_viewer_ui_top_side_language[0]
    fetch('svg/right.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_right_button').innerHTML = svg);
    document.getElementById('hi_html_viewer_right_button').title=hi_html_viewer_ui_top_side_language[1]
    fetch('svg/refresh.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_refresh_button').innerHTML = svg);
    document.getElementById('hi_html_viewer_refresh_button').title=hi_html_viewer_ui_top_side_language[2]
    document.getElementById('hi_html_viewer_text_url').title=hi_html_viewer_ui_top_side_language[3]
    fetch('svg/menu.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_menu_button').innerHTML = svg);
    document.getElementById('hi_html_viewer_menu_button').title=hi_html_viewer_ui_top_side_language[4]
    fetch('svg/full_screen.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_full-screen_button').innerHTML = svg);
    document.getElementById('hi_html_viewer_full-screen_button').title=hi_html_viewer_ui_top_side_language[5]
    //这是一些菜单栏
    fetch('svg/open_file.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_open-file_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[0]+"</span>").catch(document.getElementById('hi_html_viewer_open-file_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[0]+"</span>");
    document.getElementById('hi_html_viewer_open-file_button').title=hi_html_viewer_ui_menu_language[0]
    fetch('svg/clean_content.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_clean_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[1]+"</span>").catch(document.getElementById('hi_html_viewer_clean_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[1]+"</span>");
    document.getElementById('hi_html_viewer_clean_button').title=hi_html_viewer_ui_menu_language[1]
    fetch('svg/input_url.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_url_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[2]+"</span>").catch(document.getElementById('hi_html_viewer_url_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[2]+"</span>");
    document.getElementById('hi_html_viewer_url_button').title=hi_html_viewer_ui_menu_language[2]
    fetch('svg/copy_url.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_copy-url_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[3]+"</span>").catch(document.getElementById('hi_html_viewer_copy-url_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[3]+"</span>");
    document.getElementById('hi_html_viewer_copy-url_button').title=hi_html_viewer_ui_menu_language[3]
    fetch('svg/copy_html.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_copy-file_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[4]+"</span>").catch(document.getElementById('hi_html_viewer_copy-file_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[4]+"</span>");
    document.getElementById('hi_html_viewer_copy-file_button').title=hi_html_viewer_ui_menu_language[4]
    fetch('svg/input_code.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_input-code_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[5]+"</span>").catch(document.getElementById('hi_html_viewer_input-code_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[5]+"</span>");
    document.getElementById('hi_html_viewer_input-code_button').title=hi_html_viewer_ui_menu_language[5]
    fetch('svg/clipboard_code.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_clipboard-code_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[6]+"</span>").catch(document.getElementById('hi_html_viewer_clipboard-code_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[6]+"</span>");
    document.getElementById('hi_html_viewer_clipboard-code_button').title=hi_html_viewer_ui_menu_language[6]
    fetch('svg/option_settings.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_option_show_button').innerHTML = svg+"&ensp;<span>"+hi_html_viewer_ui_menu_language[7]+"</span>").catch(document.getElementById('hi_html_viewer_option_show_button').innerHTML = "<span>"+hi_html_viewer_ui_menu_language[7]+"</span>");
    document.getElementById('hi_html_viewer_option_show_button').title=hi_html_viewer_ui_menu_language[7]
    //这是一些选项
    document.getElementById('hi_html_viewer_option_title').innerHTML=hi_html_viewer_ui_option_language[0]
    document.getElementById('hi_html_viewer_option_hide_button').innerHTML=hi_html_viewer_ui_option_language[3]
    document.getElementById('hi_html_viewer_option_hide_button').title=hi_html_viewer_ui_option_language[3]
    document.getElementById('hi_html_viewer_option_hide_title_button').title=hi_html_viewer_ui_option_language[3]
    document.getElementById('hi_html_viewer_option_choose_settings_button').innerHTML=hi_html_viewer_ui_option_language[1]
    document.getElementById('hi_html_viewer_option_choose_about_button').innerHTML=hi_html_viewer_ui_option_language[2]
    //这是一些选项中的偏好设置
    //
    document.getElementById("hi_html_viewer_option_settings_tag").innerHTML=hi_html_viewer_ui_option_settings_language[0]
    document.getElementById("hi_html_viewer_show_utf-8_title").innerHTML=hi_html_viewer_ui_option_settings_language[1]
    document.getElementById("hi_html_viewer_top_side_transparent_title").innerHTML=hi_html_viewer_ui_option_settings_language[2]
    document.getElementById("hi_html_viewer_choose_theme_title").innerHTML=hi_html_viewer_ui_option_settings_language[3]
    document.getElementById("hi_html_viewer_backgorund_transparent_title").innerHTML=hi_html_viewer_ui_option_settings_language[4]
    document.getElementById("hi_html_viewer_app_language_title").innerHTML=hi_html_viewer_ui_option_settings_language[5]
    document.getElementById("hi_html_viewer_app_data_clean_title").innerHTML=hi_html_viewer_ui_option_settings_language[6]
    //
    document.getElementById("hi_html_viewer_show_utf-8").title=hi_html_viewer_ui_option_settings_language[1]
    document.getElementById("hi_html_viewer_top_side_transparent").title=hi_html_viewer_ui_option_settings_language[2]
    document.getElementById("hi_html_viewer_choose_theme").title=hi_html_viewer_ui_option_settings_language[3]
    document.getElementById("hi_html_viewer_backgorund_transparent").title=hi_html_viewer_ui_option_settings_language[4]
    document.getElementById("hi_html_viewer_app_language").title=hi_html_viewer_ui_option_settings_language[5]
    document.getElementById("hi_html_viewer_app_data_clean").title=hi_html_viewer_ui_option_settings_language[6]
    //
    document.getElementById("hi_html_viewer_show_utf-8_select_option_1").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[0]
    document.getElementById("hi_html_viewer_show_utf-8_select_option_2").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[1]
    document.getElementById("hi_html_viewer_top_side_transparent_select_option_1").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[2]
    document.getElementById("hi_html_viewer_top_side_transparent_select_option_2").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[3]
    document.getElementById("hi_html_viewer_top_side_transparent_select_option_3").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[4]
    document.getElementById("hi_html_viewer_choose_theme_select_option_1").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[5]
    document.getElementById("hi_html_viewer_choose_theme_select_option_2").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[6]
    document.getElementById("hi_html_viewer_choose_theme_select_option_3").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[7]
    document.getElementById("hi_html_viewer_backgorund_transparent_select_option_1").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[2]
    document.getElementById("hi_html_viewer_backgorund_transparent_select_option_2").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[4]
    document.getElementById("hi_html_viewer_app_data_clean").innerHTML=hi_html_viewer_ui_option_settings_select_option_language[8]
    //这是一些选项中的关于项目
    document.getElementById("hi_html_viewer_option_about_tag").innerHTML=hi_html_viewer_ui_option_about_language[0]
    document.getElementById("hi_html_viewer_option_about_describe").innerHTML=hi_html_viewer_ui_option_about_language[1]
    document.getElementById("hi_html_viewer_option_open_repository_button").innerHTML=hi_html_viewer_ui_option_about_language[2]
    document.getElementById("hi_html_viewer_option_open_repository_button").title=hi_html_viewer_ui_option_about_language[2]
    document.getElementById("hi_html_viewer_option_open_releases_button").innerHTML=hi_html_viewer_ui_option_about_language[3]
    document.getElementById("hi_html_viewer_option_open_releases_button").title=hi_html_viewer_ui_option_about_language[3]
}