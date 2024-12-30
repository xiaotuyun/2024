// 获取存储在 localStorage 中的访问计数列表
function getVisitorCountList() {
    const countList = localStorage.getItem('visitorCountList');
    return countList ? JSON.parse(countList) : [];  // 如果没有计数列表，则返回空数组
}

// 更新访问计数列表
function updateVisitorCountList() {
    let countList = getVisitorCountList();
    countList.push(Date.now());  // 每次访问时将当前时间戳（或任意标识符）加入列表，表示一次访问
    localStorage.setItem('visitorCountList', JSON.stringify(countList));  // 保存更新后的列表到 localStorage

    // 更新页面显示的访问者数量
    const visitorCountElement = document.getElementById('visitor-number');
    if (visitorCountElement) {
        visitorCountElement.textContent = countList.length;  // 页面上显示访问次数（即列表的长度）
    }
}

// 页面加载时调用，更新访问者计数并显示
window.onload = function () {
    updateVisitorCountList();  // 更新访问者计数列表并显示
};
