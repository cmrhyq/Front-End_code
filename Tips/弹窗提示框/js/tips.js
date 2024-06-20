/**
 * Author: AlanHuang
 * 
 * 调用相关的提示信息方法时需要传入两个参数
 * 1. 提示信息
 * 2. 提示等级
 *    - 0 代表蓝色 第一级
 *    - 1 代表绿色 第二级
 *    - 3 代表黄色 第三级
 *    - 4 代表红色 第四级
 * 
 * 调用示例： noticTips("我是提示"， 0);
 *
 * Two parameters need to be passed in when calling the related prompt information method
 * 1. Information
 * 2. Prompt level
 *    - 0 means blue first level
 *    - 1 represents green second level
 *    - 3 means yellow third level
 *    - 4 means red fourth level
 *
 * Call example: noticTips("I am a tip", 0);
 */

var color;
var colorList = ['blue', 'green', 'yellow', 'red'];

/**
 * 错误提示
 *
 * @param msg 错误信息
 * @param level 等级
 */
function errorTips(msg,level) {
    color = colorList[level]
    new jBox('Notice', {
        animation: 'flip',
        color: color,
        content: msg
    });
}

/**
 * 通知提示
 * @param msg 通知信息
 * @param level 等级
 */
function noticeTips(msg,level) {
    color = colorList[level]
    new jBox('Notice', {
        attributes: {
            x: 'right',
            y: 'bottom'
        },
        stack: false,
        animation: {
            open: 'tada',
            close: 'zoomIn'
        },
        autoClose: Math.random() * 8000 + 2000,
        color: color,
        title: '我是标题',
        content: msg,
        delayOnHover: true,
        showCountdown: true,
        closeButton: true
    });
}
