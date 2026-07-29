/*About:这只是一些图标和文字的替换功能*/
document.addEventListener('DOMContentLoaded', function () {
    //这是顶部栏的一些图标
    fetch('svg/left.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_left_button').innerHTML = svg);
    fetch('svg/right.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_right_button').innerHTML = svg);
    fetch('svg/refresh.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_refresh_button').innerHTML = svg);
    fetch('svg/menu.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_menu_button').innerHTML = svg);
    fetch('svg/full_screen.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_full-screen_button').innerHTML = svg);
    
    //这是菜单栏的一些图标和文字
    //下面的变量别删！！！
    let ui_menu_language=["打开文件","清空内容","输入URL","复制URL","拷贝文件","输入代码","粘贴代码","选项......."]
    fetch('svg/open_file.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_open-file_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[0]+"</span>");
    fetch('svg/clean_content.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_clean_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[1]+"</span>");
    fetch('svg/input_url.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_url_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[2]+"</span>");
    fetch('svg/copy_url.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_copy-url_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[3]+"</span>");
    fetch('svg/copy_html.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_copy-file_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[4]+"</span>");
    fetch('svg/input_code.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_input-code_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[5]+"</span>");
    fetch('svg/clipboard_code.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_clipboard-code_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[6]+"</span>");
    fetch('svg/option_settings.svg').then(r => r.text()).then(svg => document.getElementById('hi_html_viewer_option_show_button').innerHTML = svg+"&ensp;<span>"+ui_menu_language[7]+"</span>");
})