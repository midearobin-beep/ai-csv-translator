# 🤖 AI CSV Translator

> 基于 AI 大模型的 CSV 批量翻译工具 | 支持 24 种语言 | 特别适合UI翻译工作

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

一个简洁高效的 CSV 翻译工具，利用 AI 大模型批量翻译你的 CSV 数据。

## ✨ 特性

- 🚀 **批量翻译** - 一次上传，自动翻译成多种语言
- 🌐 **24 种语言** - 英文、中文、西班牙语、德语、法语、日语等
- 🔧 **双 API 支持** - DeepSeek / OpenAI 兼容
- 📊 **智能预览** - 上传即可预览，翻译进度实时显示
- ⚡ **长度控制** - 进阶功能，精准控制翻译长度
- ⏱️ **预估时间** - 翻译前显示预计完成时间

## 🚀 快速开始

### 方式一：直接使用

1. 克隆仓库：
```bash
git clone https://github.com/midearobin-beep/ai-csv-translator.git
```

2. 进入目录：
```bash
cd ai-csv-translator
```

3. 启动本地服务器：
```bash
# Python 3
python3 -m http.server 8000

# 或 Node.js
npx serve .
```

4. 浏览器打开：`http://localhost:8000`

### 方式二：直接打开

双击 `index.html`（需解决 CORS 问题，建议用方式一）

## 📖 使用方法

1. **上传 CSV** - 点击上传或拖拽文件，把需要翻译的放在第一列即可，超级简单
2. **选择语言** - 勾选目标语言
3. **配置 API** - 填写 API Key（支持 DeepSeek / OpenAI）
4. **开始翻译** - 点击按钮，等待完成
5. **下载结果** - 一键导出翻译后的 CSV

## 📷 界面预览

<img width="2820" height="1606" alt="截图 1" src="https://github.com/user-attachments/assets/646669b8-5f25-4038-aa31-6c8cbea0a41d" />
<img width="2376" height="1304" alt="截图 2" src="https://github.com/user-attachments/assets/c3273763-4aae-447e-8fa1-3e1461629da3" />

## 🔑 API 配置

### DeepSeek（推荐）
- Base URL: `https://api.deepseek.com`
- 模型: `deepseek-chat`

### OpenAI 兼容
- Base URL: 自定义（如 `https://api.openai.com/v1`）
- 模型: `gpt-3.5-turbo` 等

## 🛠️ 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- 无需后端，纯前端实现
- 零依赖，直接浏览器运行

## 📝 License

MIT License - 欢迎自由使用和修改！

---

Made with ❤️ by [Robin Wang](https://github.com/midearobin-beep)
