////js/visitorCount.js
//// 获取存储在 localStorage 中的访问计数列表
//function getVisitorCountList() {
//    const countList = localStorage.getItem('visitorCountList');
//    return countList ? JSON.parse(countList) : [];  // 如果没有计数列表，则返回空数组
//}
//
//// 更新访问计数列表
//function updateVisitorCountList() {
//    let countList = getVisitorCountList();
//    countList.push(1);  // 每次访问时，将 1 加入列表，表示一个新的访问者
//    localStorage.setItem('visitorCountList', JSON.stringify(countList));  // 保存更新后的列表到 localStorage
//
//    // **开发调试**: 在控制台中显示访问列表和访问总次数
//    console.log('访问列表:', countList);  // 打印访问者计数列表
//    console.log('共计访问', countList.length, '次');  // 打印访问总次数
//}
//
//// 页面加载时调用，更新访问者计数并显示
//window.onload = function () {
//    updateVisitorCountList();  // 更新访问者计数列表并显示
//};


// 获取存储在 localStorage 中的访问计数列表
function getVisitorCountList() {
    const countList = localStorage.getItem('visitorCountList');
    return countList ? JSON.parse(countList) : [];  // 如果没有计数列表，则返回空数组
}

// 更新访问计数列表
function updateVisitorCountList() {
    let countList = getVisitorCountList();
    countList.push(1);  // 每次访问时，将 1 加入列表，表示一个新的访问者
    localStorage.setItem('visitorCountList', JSON.stringify(countList));  // 保存更新后的列表到 localStorage

    // **开发调试**: 在控制台中显示访问列表和访问总次数
    console.log('访问列表:', countList);  // 打印访问者计数列表
    console.log('共计访问', countList.length, '次');  // 打印访问总次数

    // 更新页面上的访问计数
    document.getElementById('visitorCount').textContent = countList.length;
}

// 页面加载时调用，更新访问者计数并显示
window.onload = function () {
    updateVisitorCountList();  // 更新访问者计数列表并显示
};
