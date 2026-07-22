/*About: 这些都是一些按钮的一些功能,还有一个输入框.*/



//下面两个变量不要删！！！
//用于返回浏览过的文件或链接
//这个是来定义变量的,而且还是全局变量.
hi_html_viewer_url_list = [];
hi_html_viewer_url_list_number=0;


//输入链接(url)
//还有一个输入链接的按钮,打开文件的按钮也有一些
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

//菜单显示和隐藏
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
  if (!full_condition.fullscreenElement &&
      !full_condition.webkitFullscreenElement &&
      !full_condition.msFullscreenElement) {
    if (full_element.requestFullscreen) {
      full_element.requestFullscreen();
    } else if (full_element.webkitRequestFullscreen) {
      full_element.webkitRequestFullscreen();
    } else if (full_element.msRequestFullscreen) {
      full_element.msRequestFullscreen();
    }
  }
  else {
    if (full_condition.exitFullscreen) {
      full_condition.exitFullscreen();
    } else if (full_condition.webkitExitFullscreen) {
      full_condition.webkitExitFullscreen();
    } else if (full_condition.msExitFullscreen) {
      full_condition.msExitFullscreen();
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
  iframe.src = "data:text;text,"
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



//下面的这个函数别删！！！
//这一个函数可以减少一些代码过长打不开的问题
function hi_html_viewer_base64(str) {
  const bytes = new TextEncoder().encode(str);
  return btoa(Array.from(bytes, data_file => String.fromCharCode(data_file)).join(''));
}



//是否强制UTF-8显示
//下面的变量别删！！！
hi_html_viewer_show_text_unicode=1
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hi_html_viewer_show_utf-8').addEventListener('change', function () {
    const value_option = this.value;
    if (value_option !== "") {
    if(value_option =="yes"){
      hi_html_viewer_show_text_unicode=1
    } else if(value_option =="no"){
        hi_html_viewer_show_text_unicode=0
    }else{
        hi_html_viewer_show_text_unicode=1
    }
    }
  });
})


//这是关于界面的窗口,一般用于展示版本信息
function hi_html_viewer_about_show(){
  const app_about = document.getElementById('hi_html_viewer_about');
  app_about.showModal();
}
function hi_html_viewer_about_hide(){
  const app_about = document.getElementById('hi_html_viewer_about');
  app_about.close();
}



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
    }, 300);
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