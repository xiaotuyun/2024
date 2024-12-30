// 获取 Cookie 值
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return null;
}

// 设置 Cookie 值
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 设置过期时间为 days 天
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // 设置 Cookie
}

// 更新访问者计数
function updateVisitorCount() {
    let visitorCount = getCookie('visitorCount');
    if (!visitorCount) {
        visitorCount = 1;  // 如果没有 cookie，设置为 1
    } else {
        visitorCount = parseInt(visitorCount) + 1;  // 否则计数 +1
    }
    setCookie('visitorCount', visitorCount, 365);  // 将计数保存到 Cookie，过期时间为 1 年

    // 更新页面中的显示
    const visitorCountElement = document.getElementById('visitor-number');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount;
    }
}

// 初始化访问者计数
function initializeVisitorCount() {
    updateVisitorCount();  // 更新访问者计数
}

// 页面加载时执行
window.onload = function () {
    initializeVisitorCount();  // 初始化访问者计数
};
