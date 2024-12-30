// 设置 Cookie 的函数
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // 设置过期时间
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// 获取 Cookie 的函数
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;  // 如果没有找到对应的 Cookie
}

// 获取访问者计数
function getVisitorCount() {
    let visitorCount = getCookie('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;  // 如果没有计数，初始化为 0
    }
    return parseInt(visitorCount);
}

// 设置新的访问者计数
function setVisitorCount(count) {
    setCookie('visitorCount', count, 365);  // 设置 Cookie 并保存 365 天
}

// 更新页面显示的访问者数量
function updateVisitorCount() {
    let visitorCount = getVisitorCount();
    visitorCount++;  // 每次访问时递增计数
    setVisitorCount(visitorCount);  // 将新的计数保存到 Cookie

    // 更新页面中的显示
    const visitorCountElement = document.getElementById('visitor-number');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount;
    }
}

// 页面加载时调用，更新访问者计数
window.onload = function () {
    updateVisitorCount();  // 更新访问者计数并显示
};
