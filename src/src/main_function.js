/*About: 这些都是一些按钮的一些功能,还有一个输入框,还有一些调试选项.*/



//下面两个变量不要删！！！
//用于返回浏览过的文件或链接
//这个是来定义变量的,而且还是全局变量.
hi_html_viewer_url_list = [];
hi_html_viewer_url_list_number=0;


//输入链接(url)
//还有一个输入链接的按钮,打开文件和输入代码和粘贴代码的按钮也有一些
document.addEventListener('DOMContentLoaded', function () {
const input_url  = document.getElementById('hi_html_viewer_text_url');
const iframe = document.getElementById('hi_html_viewer_main_preview');
input_url.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      let url = input_url.value.trim();
      if (!url) return;
      hi_html_viewer_url_list.slice(0,hi_html_viewer_url_list_number+1);
      hi_html_viewer_url_list_number=hi_html_viewer_url_list.length;
      hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1
      hi_html_viewer_url_list.push(url);
      iframe.src = url;
    }
});
})

//前进和后退
function hi_html_viewer_left(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  if (hi_html_viewer_url_list_number>1){
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number-=1;
    let url = hi_html_viewer_url_list[hi_html_viewer_url_list_number-1];
    if (!url) return;
    iframe.src = url;
    input_url.value =url
  }
}

function hi_html_viewer_right(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  if (hi_html_viewer_url_list_number<hi_html_viewer_url_list.length){
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1;
    let url = hi_html_viewer_url_list[hi_html_viewer_url_list_number-1];
    if (!url) return;
    iframe.src = url;
    input_url.value =url
  }
}

//刷新框架
function hi_html_viewer_refresh_frame() {
    const iframe = document.getElementById('hi_html_viewer_main_preview');
    iframe.contentWindow.location.replace(iframe.src);
}

//菜单栏的显示和隐藏
function hi_html_viewer_menu_show() {
  const menu = document.getElementById('hi_html_viewer_menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  const full_screen_var = document.getElementById('hi_html_viewer_menu');
  window.addEventListener('blur', function () {
    if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
      full_screen_var.style.display = 'none';
    }
  });
});

//是否全屏显示
//这个好像对键盘上的F11全屏不起作用
function hi_html_viewer_menu_full_screen(element) {
  const full_condition = document;
  const full_element = element || full_condition.documentElement;
  if (!full_condition.fullscreenElement && !full_condition.webkitFullscreenElement){
    if (full_element.requestFullscreen) {
      full_element.requestFullscreen();
    } else{
      full_element.webkitRequestFullscreen();
    }
  }
  else {
    if (full_condition.exitFullscreen) {
      full_condition.exitFullscreen();
    } else{
      full_condition.webkitExitFullscreen();
    }
  }
}



//菜单栏的功能
function hi_html_viewer_open_file(open_file){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  const file = open_file.files[0];
  if (!file) return;
  const open_file_read = new FileReader();
  open_file_read.onload = function(file_text) {
    let url = "data:text/html;charset=utf-8;base64,"
    if (hi_html_viewer_show_text_unicode ==0){url = "data:text/html;base64,"}
    url = url+hi_html_viewer_base64(file_text.target.result);
    hi_html_viewer_url_list.slice(0,hi_html_viewer_url_list_number+1);
    hi_html_viewer_url_list_number=hi_html_viewer_url_list.length;
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1
    hi_html_viewer_url_list.push(url);
    iframe.src = url;
    input_url.value =url;
  }
  open_file_read.readAsText(file, 'UTF-8');
  open_file.value = ''; 
}

function hi_html_viewer_clean(){
  //下面这两个变量(hi_html_viewer_url_list)别删!!!
  //下面是两个变量是重置列表
  hi_html_viewer_url_list = [];
  hi_html_viewer_url_list_number=0;
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_code = document.getElementById('hi_html_viewer_text_url');
  iframe.src = "data:text;text,";
  input_code.value ="";
}

function hi_html_viewer_url(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  let url = prompt("请输入URL", "");
  if (url !== null) {
    if (!url) return;
    hi_html_viewer_url_list.slice(0,hi_html_viewer_url_list_number+1);
    hi_html_viewer_url_list_number=hi_html_viewer_url_list.length;
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1
    hi_html_viewer_url_list.push(url);
    iframe.src = url;
    input_url.value =url
  }
}

function hi_html_viewer_copy_url(){
  if(hi_html_viewer_url_list_number>0){
    let copy_url=hi_html_viewer_url_list[hi_html_viewer_url_list_number-1];
    navigator.clipboard.writeText(copy_url);
  }
}

function hi_html_viewer_copy_file(){
  if(hi_html_viewer_url_list_number>0){
    const copy_file = document.createElement('a');
    copy_file.href = hi_html_viewer_url_list[hi_html_viewer_url_list_number-1];
    copy_file.download = "copy_file.html";
    copy_file.target = "_blank";
    copy_file.click();
  }
}

function hi_html_viewer_input_code(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_code = document.getElementById('hi_html_viewer_text_url');
  let default_code_config = "data:text/html;charset=utf-8;base64,"
  if (hi_html_viewer_show_text_unicode ==0){default_code_config = "data:text/html;base64,"}
  url = default_code_config+hi_html_viewer_base64(prompt("请输入html代码",""));
  if (url !== default_code_config+"bnVsbA==") {
    hi_html_viewer_url_list.slice(0,hi_html_viewer_url_list_number+1);
    hi_html_viewer_url_list_number=hi_html_viewer_url_list.length;
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1
    hi_html_viewer_url_list.push(url);
    iframe.src = url;
    input_code.value =url;
  }
}

async function hi_html_viewer_clipboard_code(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_code = document.getElementById('hi_html_viewer_text_url');
  let clipboard_code;
  try{
    const code = await navigator.clipboard.readText();
    if (code ==""){return}
    clipboard_code=code
  } catch (err){return}
  let default_code_config = "data:text/html;charset=utf-8;base64,"
  if (hi_html_viewer_show_text_unicode ==0){default_code_config = "data:text/html;base64,"}
  url = default_code_config+hi_html_viewer_base64(clipboard_code);
  if (url !== default_code_config+"bnVsbA==") {
    hi_html_viewer_url_list.slice(0,hi_html_viewer_url_list_number+1);
    hi_html_viewer_url_list_number=hi_html_viewer_url_list.length;
    hi_html_viewer_url_list_number=hi_html_viewer_url_list_number+=1
    hi_html_viewer_url_list.push(url);
    iframe.src = url;
    input_code.value =url;
  }
}

//下面的这个函数别删！！！
//这一个函数可以减少一些代码过长打不开的问题
function hi_html_viewer_base64(str) {
  const bytes = new TextEncoder().encode(str);
  return btoa(Array.from(bytes, data_file => String.fromCharCode(data_file)).join(""));
}



//是否强制UTF-8显示
//下面的变量别删！！！
hi_html_viewer_show_text_unicode=1
document.addEventListener('DOMContentLoaded', function () {
  let hi_html_viewer_show_utf_storage = localStorage.getItem("hi_html_viewer_utf-8_storage");
  if(hi_html_viewer_show_utf_storage =="yes"){
      hi_html_viewer_show_text_unicode=1
      localStorage.setItem("hi_html_viewer_utf-8_storage","yes");
      document.getElementById("hi_html_viewer_show_utf-8").value ="yes"
    } else if(hi_html_viewer_show_utf_storage =="no"){
        hi_html_viewer_show_text_unicode=0
        localStorage.setItem("hi_html_viewer_utf-8_storage","no");
        document.getElementById("hi_html_viewer_show_utf-8").value ="no"
    } else{
        hi_html_viewer_show_text_unicode=1
        localStorage.setItem("hi_html_viewer_utf-8_storage","yes");
        document.getElementById("hi_html_viewer_show_utf-8").value ="yes"
    }
  document.getElementById('hi_html_viewer_show_utf-8').addEventListener('change', function () {
    const value_option = this.value;
    if (value_option !== "") {
      if(value_option =="yes"){
        hi_html_viewer_show_text_unicode=1
        localStorage.setItem("hi_html_viewer_utf-8_storage","yes");
      } else if(value_option =="no"){
          hi_html_viewer_show_text_unicode=0
          localStorage.setItem("hi_html_viewer_utf-8_storage","no");
      } else{
          hi_html_viewer_show_text_unicode=1
          localStorage.setItem("hi_html_viewer_utf-8_storage","yes");
      }
    } else{
        hi_html_viewer_show_text_unicode=1
        localStorage.setItem("hi_html_viewer_utf-8_storage","yes");
    }
  });
})



//这是透明化顶部栏和菜单栏的
document.addEventListener('DOMContentLoaded', function () {
  let hi_html_viewer_show_bar_transparent_storage = localStorage.getItem("hi_html_viewer_show_bar_transparent_storage");
  const top_side= document.getElementById('hi_html_viewer_side');
  if(hi_html_viewer_show_bar_transparent_storage =="yes"){
      top_side.style.opacity="0.5"
      localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","yes");
      document.getElementById("hi_html_viewer_top_side_transparent").value ="yes"
    } else if(hi_html_viewer_show_bar_transparent_storage =="more"){
        top_side.style.opacity="0.25"
        localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","more");
        document.getElementById("hi_html_viewer_top_side_transparent").value ="more"
    } else if(hi_html_viewer_show_bar_transparent_storage =="no"){
        top_side.style.opacity="1"
        localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","no");
        document.getElementById("hi_html_viewer_top_side_transparent").value ="no"
    } else{
        top_side.style.opacity="1"
        localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","no");
        document.getElementById("hi_html_viewer_top_side_transparent").value ="no"
    }
  document.getElementById('hi_html_viewer_top_side_transparent').addEventListener('change', function () {
    const top_side= document.getElementById('hi_html_viewer_side');
    const value_option = this.value;
    if (value_option !== "") {
      if(value_option =="yes"){
        top_side.style.opacity="0.5"
        localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","yes")
      } else if(value_option =="more"){
          top_side.style.opacity="0.25"
          localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","more")
      } else if(value_option =="no"){
          top_side.style.opacity="1"
          localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","no")
      }
      else{
          top_side.style.opacity="1"
          localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","no")
      }
    } else{
      top_side.style.opacity="1"
      localStorage.setItem("hi_html_viewer_show_bar_transparent_storage","no")
    }
  });
})



//这个是框架透明化
//background-color: var(--hi_html_viewer-app-backgorund-glass-color);
document.addEventListener('DOMContentLoaded', function () {
  let hi_html_viewer_backgorund_transparent_storage = localStorage.getItem("hi_html_viewer_backgorund_transparent_storage");
  const background_transparent= document.getElementById('hi_html_viewer_main_preview');
  if(hi_html_viewer_backgorund_transparent_storage =="yes"){
    background_transparent.style.backgroundColor="var(--hi_html_viewer-app-backgorund-glass-color)"
    localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","yes");
    document.getElementById("hi_html_viewer_backgorund_transparent").value ="yes"
  } else if(hi_html_viewer_backgorund_transparent_storage =="no"){
    background_transparent.style.backgroundColor="rgba(175,175,175,0.99)"
    localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","no");
    document.getElementById("hi_html_viewer_backgorund_transparent").value ="no"
  } else{
    background_transparent.style.backgroundColor="var(--hi_html_viewer-app-backgorund-glass-color)"
    localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","yes");
    document.getElementById("hi_html_viewer_backgorund_transparent").value ="yes"
  }
  document.getElementById('hi_html_viewer_backgorund_transparent').addEventListener('change', function () {
    const background_transparent= document.getElementById('hi_html_viewer_main_preview');
    const value_option = this.value;
    if (value_option !== "") {
      if(value_option =="yes"){
        background_transparent.style.backgroundColor="var(--hi_html_viewer-app-backgorund-glass-color)"
        localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","yes")
      } else if(value_option =="no"){
          background_transparent.style.backgroundColor="rgba(175,175,175,0.99)"
          localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","no");
      } else{
          background_transparent.style.backgroundColor="var(--hi_html_viewer-app-backgorund-glass-color)"
          localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","yes");
      }
    } else{
        background_transparent.style.backgroundColor="var(--hi_html_viewer-app-backgorund-glass-color)"
        localStorage.setItem("hi_html_viewer_backgorund_transparent_storage","yes");
    }
  });
})



//这个是深色主题的切换
//主题文件在"theme_config.css"里
document.addEventListener("DOMContentLoaded", function () {
  let hi_html_viewer_theme_storage = localStorage.getItem("hi_html_viewer_theme_storage");
  const app_main_theme = document.documentElement;
  if(hi_html_viewer_theme_storage =="system-theme"){
      app_main_theme.removeAttribute("hi-html-viewer-app-theme");
      localStorage.setItem("hi_html_viewer_theme_storage","system-theme");
      document.getElementById("hi_html_viewer_choose_theme").value ="system-theme"
    } else if(hi_html_viewer_theme_storage =="light-theme"){
        app_main_theme.setAttribute("hi-html-viewer-app-theme","light");
        localStorage.setItem("hi_html_viewer_theme_storage","light-theme");
        document.getElementById("hi_html_viewer_choose_theme").value ="light-theme"
    } else if(hi_html_viewer_theme_storage =="dark-theme"){
        app_main_theme.setAttribute("hi-html-viewer-app-theme","dark");
        localStorage.setItem("hi_html_viewer_theme_storage","dark-theme");
        document.getElementById("hi_html_viewer_choose_theme").value ="dark-theme"
    } else{
        app_main_theme.removeAttribute("hi-html-viewer-app-theme");
        localStorage.setItem("hi_html_viewer_theme_storage","system-theme");
        document.getElementById("hi_html_viewer_choose_theme").value ="system-theme"
    }
  document.getElementById("hi_html_viewer_choose_theme").addEventListener("change", function () {
    const app_main_theme = document.documentElement;
    const value_option = this.value;
    if (value_option !== "") {
      if(value_option =="system-theme"){
        app_main_theme.removeAttribute("hi-html-viewer-app-theme");
        localStorage.setItem("hi_html_viewer_theme_storage","system-theme")
      } else if(value_option =="light-theme"){
        app_main_theme.setAttribute("hi-html-viewer-app-theme","light");
        localStorage.setItem("hi_html_viewer_theme_storage","light-theme")
      } else if(value_option =="dark-theme"){
        app_main_theme.setAttribute("hi-html-viewer-app-theme","dark");
        localStorage.setItem("hi_html_viewer_theme_storage","dark-theme")
      } else{
        app_main_theme.removeAttribute("hi-html-viewer-app-theme");
        localStorage.setItem("hi_html_viewer_theme_storage","system-theme")
      }
    } else{
        app_main_theme.removeAttribute("hi-html-viewer-app-theme");
        localStorage.setItem("hi_html_viewer_theme_storage","system-theme")
    }
  });
})



//这个是语言切换的选项
//语言配置文件在"add_render.js"里
document.addEventListener('DOMContentLoaded', function () {
  const lang = navigator.language || navigator.userLanguage;
  let hi_html_viewer_language_storage = localStorage.getItem("hi_html_viewer_language_storage");
  if(hi_html_viewer_language_storage =="简体中文"){
    hi_html_viewer_app_language_简体中文_config();
    localStorage.setItem("hi_html_viewer_language_storage","简体中文");
    document.getElementById("hi_html_viewer_app_language").value ="简体中文"
    document.documentElement.lang ="zh"
  } else if(hi_html_viewer_language_storage =="繁體中文"){
        hi_html_viewer_app_language_繁體中文_config();
        localStorage.setItem("hi_html_viewer_language_storage","繁體中文");
        document.getElementById("hi_html_viewer_app_language").value ="繁體中文"
        document.documentElement.lang ="zh"
  } else if(hi_html_viewer_language_storage =="english"){
      hi_html_viewer_app_language_english_config();
      localStorage.setItem("hi_html_viewer_language_storage","english");
      document.getElementById("hi_html_viewer_app_language").value ="english"
      document.documentElement.lang ="en"
  } else{
      if(lang.startsWith('zh')){
        hi_html_viewer_app_language_简体中文_config();
        localStorage.setItem("hi_html_viewer_language_storage","简体中文");
        document.getElementById("hi_html_viewer_app_language").value ="简体中文"
        document.documentElement.lang ="zh"
      } else{
        hi_html_viewer_app_language_english_config();
        localStorage.setItem("hi_html_viewer_language_storage","english");
        document.getElementById("hi_html_viewer_app_language").value ="english"
        document.documentElement.lang ="en"
      }
  }
    document.getElementById('hi_html_viewer_app_language').addEventListener('change', function () {
      const value_option = this.value;
        if (value_option !== "") {
          if(value_option =="简体中文"){
              hi_html_viewer_app_language_简体中文_config();
              localStorage.setItem("hi_html_viewer_language_storage","简体中文");
              document.documentElement.lang ="zh"
          } else if(value_option =="繁體中文"){
              hi_html_viewer_app_language_繁體中文_config();
              localStorage.setItem("hi_html_viewer_language_storage","繁體中文");
              document.documentElement.lang ="zh"
          } else if(value_option =="english"){
              hi_html_viewer_app_language_english_config();
              localStorage.setItem("hi_html_viewer_language_storage","english");
              document.documentElement.lang ="en"
          } else{
              hi_html_viewer_app_language_english_config();
              localStorage.setItem("hi_html_viewer_language_storage","english");
              document.documentElement.lang ="en"
          }
        } else{
            hi_html_viewer_app_language_english_config();
            localStorage.setItem("hi_html_viewer_language_storage","english");
            document.documentElement.lang ="en"
        }
    });
})

function hi_html_viewer_app_data_clean(){
  localStorage.removeItem("hi_html_viewer_utf-8_storage")
  localStorage.removeItem("hi_html_viewer_show_bar_transparent_storage")
  localStorage.removeItem("hi_html_viewer_backgorund_transparent_storage")
  localStorage.removeItem("hi_html_viewer_theme_storage")
  localStorage.removeItem("hi_html_viewer_language_storage")
  localStorage.clear()
}

//这是选项界面的窗口
function hi_html_viewer_option_show(){
  const app_about = document.getElementById('hi_html_viewer_option');
  app_about.showModal();
}

function hi_html_viewer_option_hide(){
  const app_about = document.getElementById('hi_html_viewer_option');
  app_about.close();
}

function hi_html_viewer_option_open_repository() {
  if (window.__TAURI__) {
  window.__TAURI__.opener.openUrl("https://github.com/oneblockh/hi-html-viewer");
  } else{
    window.open("https://github.com/oneblockh/hi-html-viewer")
  }
};

function hi_html_viewer_option_open_releases() {
  if (window.__TAURI__) {
  window.__TAURI__.opener.openUrl("https://github.com/oneblockh/hi-html-viewer/releases");
  } else{
    window.open("https://github.com/oneblockh/hi-html-viewer/releases")
  }
};



//这个是边栏拖动,但是可能还有一些bug
document.addEventListener('DOMContentLoaded', function () {
  const app_side_top = document.getElementById('hi_html_viewer_side');
  const app_side_bar = document.getElementById('hi_html_viewer_top_side');
  let side_x_y=[]
  let timer, dragging,app_max_width;
  app_side_bar.onpointerdown = e => {
    side_x_y[0] = e.clientX;
    side_x_y[1] = e.clientY;
    side_x_y[2] = parseFloat(getComputedStyle(app_side_top).left) || 0;
    side_x_y[3] = parseFloat(getComputedStyle(app_side_top).top) || 0;
    timer = setTimeout(() => {
      dragging = true;
      app_side_bar.setPointerCapture(e.pointerId);
    }, 255);
  }
  app_side_bar.onpointermove = e => {
      if (!dragging) {
      if (Math.abs(e.clientX - side_x_y[0]) > 15 || Math.abs(e.clientY - side_x_y[1]) > 15) clearTimeout(timer);
      return;
    }
    const parent = app_side_top.offsetParent || document.documentElement;
    if (parent.clientWidth <500){
      app_max_width =0;
    } else{
      app_max_width=0-(parent.clientWidth /1.6)-(parent.clientWidth /20)
    }
    app_side_top.style.left = Math.max(app_max_width, Math.min(side_x_y[2] + e.clientX - side_x_y[0], parent.clientWidth - app_side_top.offsetWidth)) + 'px';
    app_side_top.style.top = Math.max(0, Math.min(side_x_y[3] + e.clientY - side_x_y[1], parent.clientHeight - app_side_top.offsetHeight)) + 'px';
  }
  app_side_bar.onpointerup = app_side_bar.onpointercancel = () => {
    clearTimeout(timer);
    dragging = false;
  }
  app_side_bar.oncontextmenu = e => e.preventDefault();
});