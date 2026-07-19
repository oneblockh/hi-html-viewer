/*About: 这些都是一些按钮的一些功能,还有一个输入框.*/



//下面两个变量不要删！！！
//用于返回浏览过的文件或链接
//这个是来定义变量的,而且还是全局变量.
url_list = [];
url_list_number=0;


//输入链接(url)
//还有一个输入链接的按钮,打开文件的按钮也有一些
document.addEventListener('DOMContentLoaded', function () {
const input_url  = document.getElementById('hi_html_viewer_text_url');
const iframe = document.getElementById('hi_html_viewer_main_preview');
input_url.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      let url = input_url.value.trim();
      if (!url) return;
      url_list.slice(0,url_list_number+1);
      url_list_number=url_list.length;
      url_list_number=url_list_number+=1
      url_list.push(url);
      iframe.src = url;
    }
});
})

//前进和后退
function hi_html_viewer_left(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  if (url_list_number>1){
    url_list_number=url_list_number-=1;
    let url = url_list[url_list_number-1];
    if (!url) return;
    iframe.src = url;
    input_url.value =url
  }
}

function hi_html_viewer_right(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  if (url_list_number<url_list.length){
    url_list_number=url_list_number+=1;
    let url = url_list[url_list_number-1];
    if (!url) return;
    iframe.src = url;
    input_url.value =url
  }
}

//刷新框架
function hi_html_viewer_refreshFrame() {
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



function hi_html_viewer_open_file(open_file){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  const file = open_file.files[0];
  if (!file) return;
  const open_file_read = new FileReader();
  open_file_read.onload = function(event) {
    let url = "data:text/html;charset=utf-8;base64,"+base64(event.target.result);
    url_list.slice(0,url_list_number+1);
    url_list_number=url_list.length;
    url_list_number=url_list_number+=1
    url_list.push(url);
    iframe.src = url;
    input_url.value =url;
  }
  open_file_read.readAsText(file, 'UTF-8');
  open_file.value = ''; 
}

function hi_html_viewer_clean(){
  //下面这两个变量(url_list)别删!!!
  //下面是两个变量是重置列表
  url_list = [];
  url_list_number=0;
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  iframe.src = "data:text;text,"
}

function hi_html_viewer_url(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  let url = prompt("请输入URL", "");
  if (url !== null) {
    if (!url) return;
    url_list.slice(0,url_list_number+1);
    url_list_number=url_list.length;
    url_list_number=url_list_number+=1
    url_list.push(url);
    iframe.src = url;
    input_url.value =url
  }
}

function hi_html_viewer_copy_url(){
  if(url_list_number>0){
    let copy_url=url_list[url_list_number-1];
    navigator.clipboard.writeText(copy_url);
  }
}

function hi_html_viewer_copy_file(){
  if(url_list_number>0){
    const copy_file = document.createElement('a');
    copy_file.href = url_list[url_list_number-1];
    copy_file.download = "copy_file.html";
    copy_file.target = "_blank";
    copy_file.click();
  }
}

function hi_html_viewer_input_code(){
  const iframe = document.getElementById('hi_html_viewer_main_preview');
  const input_url  = document.getElementById('hi_html_viewer_text_url');
  let url = "data:text/html;charset=utf-8;base64,"+base64(prompt("请输入html代码",""));
  if (url !== null) {
    url_list.slice(0,url_list_number+1);
    url_list_number=url_list.length;
    url_list_number=url_list_number+=1
    url_list.push(url);
    iframe.src = url;
    input_url.value =url;
  }
}



//下面的这个函数别删！！！
//这一个函数可以减少一些代码过长打不开的问题
function base64(str) {
  const bytes = new TextEncoder().encode(str);
  return btoa(Array.from(bytes, b => String.fromCharCode(b)).join(''));
}