const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// 定义计数文件路径
const countFilePath = path.join(__dirname, '1.txt');

// 读取计数文件
function readCountFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(countFilePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // 如果文件不存在，初始化文件
                    fs.writeFile(countFilePath, '0', (err) => {
                        if (err) reject(err);
                        resolve(0);  // 初始访问计数为 0
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(parseInt(data));
            }
        });
    });
}

// 更新计数文件
function updateCountFile(count) {
    return new Promise((resolve, reject) => {
        fs.writeFile(countFilePath, count.toString(), 'utf8', (err) => {
            if (err) reject(err);
            resolve();
        });
    });
}

// 提供访问计数的 API
app.get('/visitorCount', async (req, res) => {
    try {
        let currentCount = await readCountFile();
        currentCount += 1;  // 每次访问时增加 1
        await updateCountFile(currentCount);  // 更新计数文件

        // 返回当前访问次数
        res.json({ visitorCount: currentCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update or read the visitor count' });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
