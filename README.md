# MiCode
&emsp;&emsp;本模块主要实现小米浏览器网页注入JS脚本功能。编写脚本需要一定的Javascript基础。
## 获取模块
&emsp;&emsp;[**在github下载最新版本**](https://github.com/KYMirai/MiCode/releases)
## 实现原理
&emsp;&emsp;脚本采用Javascript语言。当目标网页开始加载时（onPageStarted）,模块将执行用户所启用的脚本。
## 使用技巧
### JQuery库
&emsp;&emsp;启用该库使编程更方便、简洁，若目标网页已存在JQuery，则使用目标网页的版本。
### 加载完成后执行
&emsp;&emsp;由于脚本在目标网页加载时执行，此时目标网页未加载任何元素，推荐在网页加载完成后执行，使用方法：
```javascript
$(() -> {
    //你的代码...
});
```
### 预置函数 v2.1+
```javascript
MiCode.toast(msg)
```
&emsp;&emsp;悬浮显示一条内容为msg的Toast消息，短暂时间后自动消失。
```javascript
MiCode.geUrl()
```
&emsp;&emsp;获取当前网页的url地址。
```javascript
MiCode.openUrl(url)
```
&emsp;&emsp;打开网页为url的新窗口。
```javascript
MiCode.openBookmark()
```
&emsp;&emsp;打开书签。
```javascript
MiCode.openHistory()
```
&emsp;&emsp;打开历史记录。
```javascript
MiCode.openManager()
```
&emsp;&emsp;打开脚本管理界面。
```javascript
MiCode.setClipboard(text)
```
&emsp;&emsp;复制文本，亦可使用`MiCode.copy(text)`
```javascript
MiCode.addStyle(css)
```
&emsp;&emsp;添加style标签块




```javascript
MiCode.setValue(key, value)
```
&emsp;&emsp;保存数据,已支持各种数据类型及对象，各脚本间数据独立。
```javascript
MiCode.getValue(key[, defaultValue])
```
&emsp;&emsp;读取数据，默认值为defaultValue（空时为`null`）。
```javascript
MiCode.listValues()
```
&emsp;&emsp;获取由所有储存数据的键组成的数组。
```javascript
MiCode.deleteValue(key)
```
&emsp;&emsp;删除指定键。




<!-- ```javascript
_MiCode.setValue(namespace, key, value) //不推荐
```
&emsp;&emsp;~~\[不推荐\] 保存数据, namespace可以是任意字符， 同一namespace内数据共享~~
```javascript
_MiCode.getValue(namespace, key, defaultValue) //不推荐
```
&emsp;&emsp;~~\[不推荐\] 读取数据，默认值为defaultValue。~~ -->





```javascript
MiCode.log(...args)
```
&emsp;&emsp;向xposed输出日志。
```javascript
MiCode.exit([code])
```
&emsp;&emsp;结束浏览器进程（完全退出），code默认为0。其实现原理为`System.exit(int code)`
