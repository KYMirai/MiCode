# MiCode
&emsp;&emsp;本模块主要实现小米浏览器网页注入JS脚本功能。编写脚本需要一定的Javascript基础。
## 实现原理
&emsp;&emsp;脚本采用Javascript语言。当目标网页开始加载时（onPageStarted）,模块将执行用户所启用的脚本。
## 使用技巧
### JQuery库
&emsp;&emsp;启用该库使编程更方便、简洁，若目标网页已存在JQuery，则使用目标网页的版本。  
&emsp;&emsp;注意：本模块取消了默认的`$`函数，建议采用`jQuery`代替（注意区分大小写），亦可在使用前插入代码：`$ = jQuery;`
### 加载完成后执行
&emsp;&emsp;由于脚本在目标网页加载时执行，此时目标网页未加载任何元素，推荐在网页加载完成后执行，使用方法：
```
//需要启用JQuery(显而易见的)
jQuery(() -> {
    //你的代码...
});
```
### 预置函数
#### _app.toast(msg)
&emsp;&emsp;悬浮显示一条内容为msg的Toast消息，短暂时间后自动消失。
#### _app.exit([code])
&emsp;&emsp;结束浏览器进程（完全退出），code默认为0。其实现原理为`System.exit(int code)`
#### _app.openUrl(url)
&emsp;&emsp;打开网页为url的新窗口。
#### _app.openManager()
&emsp;&emsp;打开脚本管理界面。
#### _app.putString(key, value)
&emsp;&emsp;保存字符串，该类函数均为全局通用。
#### _app.getString(key[, defaultValue])
&emsp;&emsp;读取字符串，默认值为defaultValue。
#### _app.putNumber(key, value)
&emsp;&emsp;保存数字//支持小数、整数，但不建议过大(long to int，你懂的)
#### _app.getNumber(key[, defaultValue])
&emsp;&emsp;读取数字，默认值为defaultValue（空时为0）。
#### _app.putBoolean(key, value)
&emsp;&emsp;保存布尔值
#### _app.getBoolean(key[, defaultValue])
&emsp;&emsp;读取布尔值，默认值为defaultValue（空时为false）。