# 🤖 AI CSV Translator

> Batch CSV Translation Tool powered by AI | 24 Languages | Perfect for UI Translation

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A simple and efficient CSV translation tool using AI large language models to batch translate your CSV data.

[中文](README.md) | English

## ✨ Features

- 🚀 **Batch Translation** - Upload once, auto-translate to multiple languages
- 🌐 **24 Languages** - English, Chinese, Spanish, German, French, Japanese, and more
- 🔧 **Dual API Support** - DeepSeek / OpenAI Compatible
- 📊 **Smart Preview** - Preview on upload, real-time translation progress
- ⚡ **Length Control** - Advanced feature to precisely control translation length
- ⏱️ **Time Estimate** - Shows estimated completion time before translation
- 🌍 **Bilingual UI** - Switch between Chinese and English anytime

## 🚀 Quick Start

### Option 1: Local Server

1. Clone the repository:
```bash
git clone https://github.com/midearobin-beep/ai-csv-translator.git
```

2. Navigate to the directory:
```bash
cd ai-csv-translator
```

3. Start a local server:
```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve .
```

4. Open in browser: `http://localhost:8000`

### Option 2: GitHub Pages

Visit: https://midearobin-beep.github.io/ai-csv-translator/

## 📖 How to Use

1. **Upload CSV** - Click or drag to upload. Put text to translate in the first column
2. **Select Languages** - Check target languages
3. **Configure API** - Enter API Key (supports DeepSeek / OpenAI)
4. **Start Translation** - Click the button and wait
5. **Download** - One-click export translated CSV

## 📷 Screenshot

<img width="800" alt="Screenshot" src="https://github.com/user-attachments/assets/646669b8-5f25-4038-aa31-6c8cbea0a41d" />

## 🔑 API Configuration

### DeepSeek (Recommended)
- Base URL: `https://api.deepseek.com`
- Model: `deepseek-chat`

### OpenAI Compatible
- Base URL: Custom (e.g., `https://api.openai.com/v1`)
- Model: `gpt-3.5-turbo`, etc.

## 🛠️ Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript
- No backend required, pure frontend
- Zero dependencies, runs directly in browser

## 📝 License

MIT License - Feel free to use and modify!

---

Made with ❤️ by [Robin Wang](https://github.com/midearobin-beep)
