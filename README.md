# 🤖 AI Table Translator

> 基于 AI 大模型的表格文件批量翻译工具 | 支持 CSV/Excel | 支持 24 种语言 | 特别适合UI翻译工作

![Version](https://img.shields.io/badge/version-1.2.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

一个简洁高效的表格翻译工具，利用 AI 大模型批量翻译你的 CSV/Excel 数据。

[English](README_EN.md) | 中文

## ✨ 特性

- 📁 **多格式支持** - 支持 CSV、Excel (.xlsx/.xls) 格式
- 🚀 **批量翻译** - 一次上传，自动翻译成多种语言
- 🌐 **24 种语言** - 英文、中文、西班牙语、德语、法语、日语等
- 🔧 **双 API 支持** - DeepSeek / OpenAI 兼容
- 📊 **智能预览** - 上传即可预览，翻译进度实时显示
- ⚡ **长度控制** - 进阶功能，精准控制翻译长度
- ⏱️ **预估时间** - 翻译前显示预计完成时间
- 🌍 **双语界面** - 中文/英文随时切换
- 🔄 **双翻译模式** - 多语言列表 / 单语言替换

## 🚀 快速开始

### 方式一：直接使用

1. 克隆仓库：
```bash
git clone https://github.com/midearobin-beep/ai-table-translator.git
```

2. 进入目录：
```bash
cd ai-table-translator
```

3. 启动本地服务器：
```bash
# Python 3
python3 -m http.server 8000

# 或 Node.js
npx serve .
```

4. 浏览器打开：`http://localhost:8000`

### 方式二：GitHub Pages

访问：https://midearobin-beep.github.io/ai-table-translator/

## 📖 使用方法

### 支持的文件格式

- CSV 文件 (.csv)
- Excel 文件 (.xlsx)
- Excel 旧格式 (.xls)

### 翻译模式

- **多语言列表模式**: 翻译表格第一列，生成多个目标语言列
- **单语言替换模式**: 翻译所有单元格，原地替换原位置内容

### 多语言列表模式

1. **上传文件** - 点击上传或拖拽文件，把需要翻译的放在第一列即可
2. **选择模式** - 选择"多语言列表"模式
3. **选择语言** - 勾选目标语言
4. **配置 API** - 填写 API Key（支持 DeepSeek / OpenAI）
5. **开始翻译** - 点击按钮，等待完成
6. **下载结果** - 一键导出翻译后的文件

### 单语言替换模式

1. **上传文件** - 点击上传或拖拽文件
2. **选择模式** - 选择"单语言替换"模式
3. **选择目标语言** - 从下拉列表选择目标语言
4. **配置 API** - 填写 API Key（支持 DeepSeek / OpenAI）
5. **开始翻译** - 点击按钮，等待完成
6. **下载结果** - 一键导出翻译后的文件（保持原始表格结构）

## 📷 界面预览

<img width="800" alt="界面预览" src="https://github.com/user-attachments/assets/646669b8-5f25-4038-aa31-6c8cbea0a41d" />

## 🔑 API 配置

### DeepSeek（推荐）
- Base URL: `https://api.deepseek.com`
- 模型: `deepseek-chat`

### OpenAI 兼容
- Base URL: 自定义（如 `https://api.openai.com/v1`）
- 模型: `gpt-3.5-turbo` 等

## 🛠️ 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- SheetJS (xlsx) - Excel 文件处理
- 无需后端，纯前端实现
- 零依赖，直接浏览器运行

## 📝 License

MIT License - 欢迎自由使用和修改！

---

Made with ❤️ by [Robin Wang](https://github.com/midearobin-beep)
