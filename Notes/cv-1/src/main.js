let html = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `
/*你好，我是Lynn
 *接下来我来演示一下我的前端功底
 *首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/* 接下来我把div变成一个八卦图
 * 首先，将div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    //如果是回车，就不照搬
    //如果不是回车，就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      n = n + 1;
      step();
    }
  }, 10);
};

step();

setTimeout(() => {
  style.innerHTML = `
body{
    color:red;
    }
    `;
}, 10);