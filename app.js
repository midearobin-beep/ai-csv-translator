// UI 翻译
const i18n = {
    zh: {
        title: 'AI CSV 翻译工具',
        subtitle: '基于 AI 大模型的 CSV 批量翻译工具',
        uploadTitle: '上传 CSV 文件',
        uploadHint: '支持 .csv 格式 (UTF-8 编码)',
        uploadAreaText: '点击选择文件或拖拽文件到此处',
        sourceLang: '源语言',
        sourceLangLabel: '请选择 CSV 第一列的语言:',
        targetLang: '选择目标语言',
        selectedCount: '已选择',
        langCount: '种语言',
        advanced: '进阶功能',
        enableLengthControl: '启用字符长度控制',
        lengthHint: '开启后，翻译结果字符数将控制在源文本长度的一定倍率以内。💡 尤其适合多语言 UI 开发，保持界面一致性',
        lengthRatio: '长度倍率:',
        estimate: '预估完成时间',
        estimateText: '共',
        row: '行',
        lang: '种语言',
        request: '次请求，预计',
        startTranslate: '开始翻译',
        progressTitle: '翻译进度',
        previewTitle: '数据预览',
        moreRows: '还有',
        rows: '行...',
        resultTitle: '翻译结果',
        overLimitWarning: '有',
        overLimitText: '个单元格超出长度限制，已高亮显示',
        allGood: '翻译完成，所有结果均在长度限制内',
        download: '下载翻译后的 CSV',
        apiSettings: 'API 设置',
        apiType: 'API 类型',
        deepseek: 'DeepSeek',
        openaiCompat: 'OpenAI 兼容',
        apiKey: 'API Key',
        apiBase: 'Base URL',
        modelName: '模型名称',
        required: '*必填',
        sourceColumn: '源语言',
        errorFileEmpty: 'CSV 文件为空',
        errorFileFormat: '请上传 CSV 格式的文件',
        errorApiKey: '请输入 API Key',
        errorApiConfig: '请完善 API 配置',
        translating: '正在翻译',
        remaining: '剩余',
        seconds: '秒',
        minutes: '分钟',
        hours: '小时',
        moreRowsPreview: '行...',
        switchToEN: 'EN',
        testApi: '测试 API',
        testing: '测试中...',
        testSuccess: '连接成功！请选择模型',
        testFailed: '连接失败',
        selectModel: '选择模型',
        customModel: '或输入自定义模型',
        apiNotConfigured: '请先配置 API'
    },
    en: {
        title: 'AI CSV Translator',
        subtitle: 'Batch CSV Translation Tool powered by AI',
        uploadTitle: 'Upload CSV File',
        uploadHint: 'Supports .csv format (UTF-8)',
        uploadAreaText: 'Click to select or drag file here',
        sourceLang: 'Source Language',
        sourceLangLabel: 'Select the language of the first column:',
        targetLang: 'Select Target Languages',
        selectedCount: 'Selected',
        langCount: 'languages',
        advanced: 'Advanced',
        enableLengthControl: 'Enable length control',
        lengthHint: 'Limit translation length to a multiple of source text. Great for i18n UI development to keep consistency.',
        lengthRatio: 'Length Ratio:',
        estimate: 'Estimated Time',
        estimateText: '',
        row: 'rows ×',
        lang: 'langs =',
        request: 'requests, ~',
        startTranslate: 'Start Translation',
        progressTitle: 'Translation Progress',
        previewTitle: 'Data Preview',
        moreRows: '',
        rows: 'more rows...',
        resultTitle: 'Translation Result',
        overLimitWarning: '',
        overLimitText: 'cells exceeded length limit, highlighted',
        allGood: 'All translations within length limit',
        download: 'Download Translated CSV',
        apiSettings: 'API Settings',
        apiType: 'API Type',
        deepseek: 'DeepSeek',
        openaiCompat: 'OpenAI Compatible',
        apiKey: 'API Key',
        apiBase: 'Base URL',
        modelName: 'Model',
        required: '*Required',
        sourceColumn: 'Source',
        errorFileEmpty: 'CSV file is empty',
        errorFileFormat: 'Please upload a CSV file',
        errorApiKey: 'Please enter API Key',
        errorApiConfig: 'Please complete API settings',
        translating: 'Translating',
        remaining: '',
        seconds: 'sec',
        minutes: 'min',
        hours: 'hrs',
        moreRowsPreview: 'more rows...',
        switchToEN: '中文',
        testApi: 'Test API',
        testing: 'Testing...',
        testSuccess: 'Connection successful! Select a model',
        testFailed: 'Connection failed',
        selectModel: 'Select Model',
        customModel: 'Or enter custom model',
        apiNotConfigured: 'Please configure API first'
    }
};

// 当前语言
let currentLang = 'zh';

// 语言配置
const LANGUAGES = [
    { code: 'en', name: 'English', nativeName: '英文' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'es', name: 'Spanish', nativeName: 'Español (西班牙语)' },
    { code: 'de', name: 'German', nativeName: 'Deutsch (德语)' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski (波兰语)' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português (葡萄牙语)' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano (意大利语)' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands (荷兰语)' },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська (乌克兰语)' },
    { code: 'sr', name: 'Serbian', nativeName: 'Српски (塞尔维亚语)' },
    { code: 'fr', name: 'French', nativeName: 'Français (法语)' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά (希腊语)' },
    { code: 'ro', name: 'Romanian', nativeName: 'Română (罗马尼亚语)' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский (俄语)' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe (土耳其语)' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska (瑞典语)' },
    { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski (克罗地亚语)' },
    { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina (斯洛文尼亚语)' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština (捷克语)' },
    { code: 'hu', name: 'Hungarian', nativeName: 'Magyar (匈牙利语)' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk (丹麦语)' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk (挪威语)' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi (芬兰语)' },
    { code: 'sq', name: 'Albanian', nativeName: 'Shqip (阿尔巴尼亚语)' }
];

// 预估每次翻译耗时 (毫秒)
const ESTIMATED_TIME_PER_REQUEST = 1500;

// 应用状态
const state = {
    csvData: [],
    headers: [],
    selectedLanguages: [],
    translatedData: [],
    sourceLang: 'en',
    isTranslating: false,
    isConfigured: false,
    originalFileName: '',
    totalRequests: 0,
    completedRequests: 0,
    startTime: null
};

// DOM 元素
const elements = {
    fileInput: document.getElementById('fileInput'),
    uploadArea: document.getElementById('uploadArea'),
    fileInfo: document.getElementById('fileInfo'),
    fileName: document.getElementById('fileName'),
    fileStats: document.getElementById('fileStats'),
    languageGrid: document.getElementById('languageGrid'),
    selectedCount: document.getElementById('selectedCount'),
    translateBtn: document.getElementById('translateBtn'),
    progressSection: document.getElementById('progressSection'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    progressDetail: document.getElementById('progressDetail'),
    previewSection: document.getElementById('previewSection'),
    previewHead: document.getElementById('previewHead'),
    previewBody: document.getElementById('previewBody'),
    resultSection: document.getElementById('resultSection'),
    resultSummary: document.getElementById('resultSummary'),
    tableHead: document.getElementById('tableHead'),
    tableBody: document.getElementById('tableBody'),
    downloadSection: document.getElementById('downloadSection'),
    errorToast: document.getElementById('errorToast'),
    errorMessage: document.getElementById('errorMessage'),
    sourceLang: document.getElementById('sourceLang'),
    enableLengthControl: document.getElementById('enableLengthControl'),
    lengthControlOptions: document.getElementById('lengthControlOptions'),
    estimateSection: document.getElementById('estimateSection'),
    estimateText: document.getElementById('estimateText'),
    apiKey: document.getElementById('apiKey'),
    apiBase: document.getElementById('apiBase'),
    modelName: document.getElementById('modelName'),
    modelSelect: document.getElementById('modelSelect'),
    testApiBtn: document.getElementById('testApiBtn'),
    testResult: document.getElementById('testResult'),
    settingsSection: document.getElementById('settingsSection')
};

// 初始化
function init() {
    // 加载语言设置
    currentLang = localStorage.getItem('csvTranslatorLang') || 'zh';

    renderLanguageGrid();
    setupEventListeners();
    updateAPIFields();
    loadSettings();
    updateUIText();
}

// 切换语言
function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('csvTranslatorLang', currentLang);
    updateUIText();
}

// 更新界面文字
function updateUIText() {
    const t = i18n[currentLang];

    // 更新按钮文字
    document.getElementById('langToggle').textContent = t.switchToEN;

    // 更新标题
    document.querySelector('.header h1').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;

    // 更新上传区域
    document.querySelector('.upload-section h2').textContent = t.uploadTitle;
    document.querySelector('.upload-area p').textContent = t.uploadAreaText;
    document.querySelector('.upload-hint').textContent = t.uploadHint;

    // 更新源语言
    document.querySelector('.source-lang-section h2').textContent = t.sourceLang;
    document.querySelector('.source-lang-section .form-group label').textContent = t.sourceLangLabel;

    // 更新目标语言
    document.querySelector('.target-lang-section h2').textContent = t.targetLang;
    document.querySelector('.selected-info').innerHTML = `${t.selectedCount}: <span id="selectedCount">${state.selectedLanguages.length}</span> ${t.langCount}`;

    // 更新进阶功能
    document.querySelector('.advanced-section h2').textContent = t.advanced;
    document.querySelector('.advanced-section .checkbox-label span').textContent = t.enableLengthControl;
    document.querySelector('.advanced-section .hint').textContent = t.lengthHint;
    document.querySelector('.advanced-section .form-child(2)-group:nth label').textContent = t.lengthRatio;

    // 更新预估
    document.querySelector('.estimate-section h2').textContent = t.estimate;

    // 更新按钮
    document.getElementById('translateBtn').textContent = t.startTranslate;

    // 更新进度
    document.querySelector('.progress-section h2').textContent = t.progressTitle;

    // 更新预览
    document.querySelector('.preview-section h2').textContent = t.previewTitle;

    // 更新结果
    document.querySelector('.result-section h2').textContent = t.resultTitle;
    document.getElementById('downloadSection').querySelector('button').textContent = t.download;

    // 更新 API 设置
    document.querySelector('.settings-section h2').textContent = t.apiSettings;
    document.querySelector('.settings-section .form-group:nth-child(1) label').textContent = t.apiType;
    document.querySelector('.settings-section .radio-label:nth-child(1) span').textContent = t.deepseek;
    document.querySelector('.settings-section .radio-label:nth-child(2) span').textContent = t.openaiCompat;
    document.querySelector('.settings-section .form-group:nth-child(2) label').innerHTML = `${t.apiKey} <span class="required">${t.required}</span>`;
    document.querySelector('.settings-section .form-group:nth-child(3) label').textContent = t.apiBase;
    document.querySelector('.settings-section .form-group:nth-child(4) label').textContent = t.modelName;

    // 更新语言选择（目标语言）
    LANGUAGES.forEach(lang => {
        const tag = document.querySelector(`.lang-tag[data-code="${lang.code}"]`);
        if (tag) {
            tag.textContent = lang.nativeName;
        }
    });

    // 更新表格头
    if (elements.tableHead.innerHTML) {
        showResultTable();
    }
    if (elements.previewHead.innerHTML) {
        showPreview();
    }

    // 更新预估
    updateEstimate();
}

// 保存设置到 localStorage
function saveSettings() {
    const settings = {
        apiType: document.querySelector('input[name="apiType"]:checked').value,
        apiKey: elements.apiKey.value,
        apiBase: elements.apiBase.value,
        modelName: elements.modelName.value,
        enableLengthControl: elements.enableLengthControl.checked,
        lengthRatio: document.querySelector('input[name="lengthRatio"]:checked')?.value || '1.2'
    };
    localStorage.setItem('csvTranslatorSettings', JSON.stringify(settings));
}

// 从 localStorage 加载设置
function loadSettings() {
    const saved = localStorage.getItem('csvTranslatorSettings');
    if (!saved) return;

    try {
        const settings = JSON.parse(saved);

        // 恢复 API 类型
        const apiTypeRadios = document.querySelectorAll('input[name="apiType"]');
        apiTypeRadios.forEach(radio => {
            radio.checked = radio.value === settings.apiType;
        });
        updateAPIFields();

        // 恢复 API 配置
        if (settings.apiKey) elements.apiKey.value = settings.apiKey;
        if (settings.apiBase) elements.apiBase.value = settings.apiBase;
        if (settings.modelName) elements.modelName.value = settings.modelName;

        // 恢复进阶功能设置
        if (settings.enableLengthControl) {
            elements.enableLengthControl.checked = true;
            elements.lengthControlOptions.style.display = 'block';
        }

        const ratioRadios = document.querySelectorAll('input[name="lengthRatio"]');
        ratioRadios.forEach(radio => {
            radio.checked = radio.value === settings.lengthRatio;
        });

        updateTranslateButton();
    } catch (e) {
        console.error('加载设置失败:', e);
    }
}

// 渲染语言选择网格
function renderLanguageGrid() {
    const getName = (lang) => currentLang === 'en' ? lang.name : lang.nativeName;
    elements.languageGrid.innerHTML = LANGUAGES.map(lang => `
        <div class="lang-tag" data-code="${lang.code}" onclick="toggleLanguage('${lang.code}')">
            ${getName(lang)}
        </div>
    `).join('');
}

// 设置事件监听器
function setupEventListeners() {
    // 文件上传
    elements.uploadArea.addEventListener('click', () => elements.fileInput.click());
    elements.fileInput.addEventListener('change', handleFileSelect);

    // 拖拽上传
    elements.uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.uploadArea.classList.add('dragover');
    });
    elements.uploadArea.addEventListener('dragleave', () => {
        elements.uploadArea.classList.remove('dragover');
    });
    elements.uploadArea.addEventListener('drop', handleFileDrop);

    // API 类型切换
    document.querySelectorAll('input[name="apiType"]').forEach(radio => {
        radio.addEventListener('change', () => {
            updateAPIFields();
            saveSettings();
        });
    });

    // API 输入变化时保存
    elements.apiKey.addEventListener('input', () => {
        saveSettings();
        updateTranslateButton();
    });
    elements.apiBase.addEventListener('input', saveSettings);
    elements.modelName.addEventListener('input', saveSettings);
    elements.modelSelect.addEventListener('change', () => {
        if (elements.modelSelect.value) {
            elements.modelName.value = elements.modelSelect.value;
            saveSettings();
        }
    });

    // 进阶功能开关
    elements.enableLengthControl.addEventListener('change', (e) => {
        elements.lengthControlOptions.style.display = e.target.checked ? 'block' : 'none';
        saveSettings();
        updateEstimate();
    });

    // 倍率选择变化
    document.querySelectorAll('input[name="lengthRatio"]').forEach(radio => {
        radio.addEventListener('change', () => {
            saveSettings();
            updateEstimate();
        });
    });

    // 源语言变化
    elements.sourceLang.addEventListener('change', () => {
        state.sourceLang = elements.sourceLang.value;
    });
}

// 更新 API 字段
function updateAPIFields() {
    const apiType = document.querySelector('input[name="apiType"]:checked').value;

    if (apiType === 'deepseek') {
        elements.apiBase.value = 'https://api.deepseek.com';
        elements.apiBase.placeholder = 'https://api.deepseek.com';
        elements.modelName.value = 'deepseek-chat';
        elements.modelName.placeholder = 'deepseek-chat';
    } else {
        elements.apiBase.placeholder = 'https://api.openai.com/v1';
        elements.modelName.placeholder = 'gpt-3.5-turbo';
    }
}

// 处理文件选择
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        processFile(file);
    }
}

// 处理文件拖放
function handleFileDrop(e) {
    e.preventDefault();
    elements.uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.csv')) {
        processFile(file);
    } else {
        showError('请上传 CSV 格式的文件');
    }
}

// 处理文件
function processFile(file) {
    state.originalFileName = file.name.replace('.csv', '');
    elements.fileName.textContent = file.name;
    elements.fileInfo.style.display = 'flex';
    elements.uploadArea.style.display = 'none';

    const reader = new FileReader();
    reader.onload = (e) => {
        const csv = e.target.result;
        parseCSV(csv);
    };
    reader.readAsText(file, 'UTF-8');
}

// 解析 CSV
function parseCSV(csv) {
    const lines = csv.split(/\r?\n/).filter(line => line.trim());
    if (lines.length === 0) {
        showError('CSV 文件为空');
        return;
    }

    // 解析表头
    state.headers = parseCSVLine(lines[0]);

    // 解析数据
    state.csvData = [];
    for (let i = 1; i < lines.length; i++) {
        const row = parseCSVLine(lines[i]);
        if (row.length > 0) {
            state.csvData.push(row);
        }
    }

    // 显示文件统计信息
    elements.fileStats.textContent = `${state.csvData.length} 行`;

    // 默认选择第一列作为源语言
    state.sourceLang = elements.sourceLang.value;

    updateTranslateButton();
    showPreview();
    updateEstimate();
}

// 解析单行 CSV
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());

    return result;
}

// 切换语言选择
function toggleLanguage(code) {
    if (state.isConfigured) return;

    const index = state.selectedLanguages.indexOf(code);

    if (index > -1) {
        state.selectedLanguages.splice(index, 1);
    } else {
        state.selectedLanguages.push(code);
    }

    // 更新 UI
    document.querySelectorAll('.lang-tag').forEach(tag => {
        if (state.selectedLanguages.includes(tag.dataset.code)) {
            tag.classList.add('selected');
        } else {
            tag.classList.remove('selected');
        }
    });

    elements.selectedCount.textContent = state.selectedLanguages.length;
    updateTranslateButton();

    // 更新预览
    showPreview();
    updateEstimate();
}

// 更新翻译按钮状态
function updateTranslateButton() {
    const hasFile = state.csvData.length > 0;
    const hasLang = state.selectedLanguages.length > 0;
    const hasApiKey = elements.apiKey.value.trim().length > 0;

    elements.translateBtn.disabled = !hasFile || !hasLang || !hasApiKey || state.isTranslating;
}

// 显示预览表格
function showPreview() {
    if (state.csvData.length === 0) {
        elements.previewSection.style.display = 'none';
        return;
    }

    const t = i18n[currentLang];
    elements.previewSection.style.display = 'block';

    // 构建表头 - 源语言 + 目标语言(如果有选择)
    const headerCells = [`<th>${t.sourceColumn}</th>`];
    if (state.selectedLanguages.length > 0) {
        state.selectedLanguages.forEach(code => {
            const lang = LANGUAGES.find(l => l.code === code);
            headerCells.push(`<th>${lang?.nativeName || code}</th>`);
        });
    }
    elements.previewHead.innerHTML = `<tr>${headerCells.join('')}</tr>`;

    // 限制预览显示前10行
    const previewRows = state.csvData.slice(0, 10);
    const rows = previewRows.map(row => {
        const cells = [`<td class="source-column">${escapeHtml(row[0])}</td>`];

        // 显示占位符
        if (state.selectedLanguages.length > 0) {
            state.selectedLanguages.forEach(() => {
                cells.push('<td class="pending-cell">-</td>');
            });
        }

        return `<tr>${cells.join('')}</tr>`;
    });

    // 如果有更多行，添加提示
    if (state.csvData.length > 10) {
        rows.push(`<tr><td colspan="${headerCells.length}" class="more-rows">${t.moreRows} ${state.csvData.length - 10} ${t.moreRowsPreview}</td></tr>`);
    }

    elements.previewBody.innerHTML = rows.join('');
}

// 更新预估时间
function updateEstimate() {
    if (state.csvData.length === 0 || state.selectedLanguages.length === 0) {
        elements.estimateSection.style.display = 'none';
        return;
    }

    const t = i18n[currentLang];
    elements.estimateSection.style.display = 'block';

    const totalRequests = state.csvData.length * state.selectedLanguages.length;
    state.totalRequests = totalRequests;

    // 预估时间 = 请求数 * 每次请求耗时
    const estimatedMs = totalRequests * ESTIMATED_TIME_PER_REQUEST;
    const estimatedSeconds = Math.ceil(estimatedMs / 1000);

    let timeText;
    if (estimatedSeconds < 60) {
        timeText = `${estimatedSeconds} ${t.seconds}`;
    } else if (estimatedSeconds < 3600) {
        timeText = `${Math.ceil(estimatedSeconds / 60)} ${t.minutes}`;
    } else {
        timeText = `${(estimatedSeconds / 3600).toFixed(1)} ${t.hours}`;
    }

    const rowCount = state.csvData.length;
    const langCount = state.selectedLanguages.length;
    elements.estimateText.textContent = `${t.row} ${rowCount} × ${langCount} ${t.lang} = ${totalRequests} ${t.request} ${timeText}`;
}

// 锁定配置
function lockConfiguration() {
    state.isConfigured = true;

    // 禁用语言选择
    document.querySelectorAll('.lang-tag').forEach(tag => {
        tag.style.pointerEvents = 'none';
        tag.style.opacity = '0.7';
    });

    // 禁用进阶功能
    elements.enableLengthControl.disabled = true;
    document.querySelectorAll('input[name="lengthRatio"]').forEach(radio => {
        radio.disabled = true;
    });

    // 禁用源语言选择
    elements.sourceLang.disabled = true;

    // 隐藏预估区域
    elements.estimateSection.style.display = 'none';
}

// 解锁配置
function unlockConfiguration() {
    state.isConfigured = false;

    // 启用语言选择
    document.querySelectorAll('.lang-tag').forEach(tag => {
        tag.style.pointerEvents = 'auto';
        tag.style.opacity = '1';
    });

    // 启用进阶功能
    elements.enableLengthControl.disabled = false;
    document.querySelectorAll('input[name="lengthRatio"]').forEach(radio => {
        radio.disabled = false;
    });

    // 启用源语言选择
    elements.sourceLang.disabled = false;

    updateEstimate();
}

// 开始翻译
async function startTranslation() {
    if (state.isTranslating) return;

    const apiKey = elements.apiKey.value.trim();
    const apiBase = elements.apiBase.value.trim();
    const model = elements.modelName.value.trim();

    if (!apiKey) {
        showError('请输入 API Key');
        return;
    }

    if (!apiBase || !model) {
        showError('请完善 API 配置');
        return;
    }

    // 锁定配置
    lockConfiguration();

    state.isTranslating = true;
    state.startTime = Date.now();
    state.completedRequests = 0;

    elements.translateBtn.disabled = true;
    elements.progressSection.style.display = 'block';
    elements.resultSection.style.display = 'none';
    elements.previewSection.style.display = 'none';

    const totalTasks = state.csvData.length * state.selectedLanguages.length;
    let completedTasks = 0;

    // 初始化翻译数据
    state.translatedData = state.csvData.map(row => ({
        source: row[0],
        translations: {}
    }));

    const enableLengthControl = elements.enableLengthControl.checked;
    const lengthRatio = enableLengthControl ?
        parseFloat(document.querySelector('input[name="lengthRatio"]:checked').value) : 2.0;

    // 逐个目标语言翻译
    for (const langCode of state.selectedLanguages) {
        const langName = LANGUAGES.find(l => l.code === langCode)?.nativeName || langCode;

        for (let i = 0; i < state.csvData.length; i++) {
            const sourceText = state.csvData[i][0];

            if (!sourceText || sourceText.trim() === '') {
                state.translatedData[i].translations[langCode] = {
                    text: '',
                    isOverLimit: false
                };
                completedTasks++;
                state.completedRequests++;
                updateProgress(completedTasks, totalTasks, `正在翻译: ${langName}`);
                continue;
            }

            try {
                const result = await translateText(
                    sourceText,
                    langCode,
                    langName,
                    apiKey,
                    apiBase,
                    model,
                    enableLengthControl,
                    lengthRatio
                );

                state.translatedData[i].translations[langCode] = result;
            } catch (error) {
                console.error('翻译错误:', error);
                state.translatedData[i].translations[langCode] = {
                    text: `[翻译失败: ${error.message}]`,
                    isOverLimit: false,
                    error: true
                };
            }

            completedTasks++;
            state.completedRequests++;
            updateProgress(completedTasks, totalTasks, `正在翻译: ${langName}`);
        }
    }

    state.isTranslating = false;
    elements.translateBtn.disabled = false;
    showResultTable();
}

// 翻译单条文本
async function translateText(text, targetCode, targetName, apiKey, apiBase, model, enableLengthControl, lengthRatio) {
    const sourceLength = countEnglishChars(text);
    const maxLength = Math.ceil(sourceLength * lengthRatio);

    let prompt;

    if (enableLengthControl) {
        // 改进的提示词，更强调长度控制
        prompt = `你是一个翻译助手。请将下面的文本翻译成${targetName}。

严格要求：
1. 翻译结果必须控制在 ${maxLength} 个字符以内（中文按2个字符计算，英文按1个字符计算）
2. 只返回翻译后的文本，不要有任何解释、前缀或后缀
3. 如果原文很短，翻译也要简短
4. 优先保证翻译的准确性和通顺度，其次才是长度控制

原文：${text}`;
    } else {
        prompt = `请将以下文本翻译成${targetName}。只返回翻译结果，不要添加任何解释或其他内容。

原文: ${text}`;
    }

    const response = await fetch(`${apiBase}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: [
                { role: 'user', content: prompt }
            ],
            temperature: 0.3,
            max_tokens: 2000
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API 错误: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.choices[0]?.message?.content?.trim() || '';

    // 检查是否超长
    let isOverLimit = false;
    if (enableLengthControl) {
        const resultLength = countEnglishChars(translatedText);
        isOverLimit = resultLength > maxLength;
    }

    return {
        text: translatedText,
        isOverLimit: isOverLimit,
        maxLength: maxLength
    };
}

// 计算英文字符数
function countEnglishChars(str) {
    // 将所有全角字符转换为半角，中文字符按2个字符计算
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);
        // 中文、日文、韩文等 CJK 统一字符
        if ((code >= 0x4E00 && code <= 0x9FFF) ||
            (code >= 0x3400 && code <= 0x4DBF) ||
            (code >= 0xF900 && code <= 0xFAFF) ||
            (code >= 0x3040 && code <= 0x309F) ||
            (code >= 0x30A0 && code <= 0x30FF) ||
            (code >= 0xAC00 && code <= 0xD7AF)) {
            length += 2;
        } else {
            length += 1;
        }
    }
    return length;
}

// 更新进度
function updateProgress(completed, total, detail) {
    const percent = Math.round((completed / total) * 100);
    elements.progressBar.style.width = `${percent}%`;
    elements.progressText.textContent = `${percent}%`;

    // 计算剩余时间
    if (state.startTime && completed > 0) {
        const elapsed = Date.now() - state.startTime;
        const avgTimePerRequest = elapsed / completed;
        const remainingRequests = total - completed;
        const remainingMs = remainingRequests * avgTimePerRequest;
        const remainingSeconds = Math.ceil(remainingMs / 1000);

        let remainingText;
        if (remainingSeconds < 60) {
            remainingText = `约 ${remainingSeconds} 秒`;
        } else if (remainingSeconds < 3600) {
            remainingText = `约 ${Math.ceil(remainingSeconds / 60)} 分钟`;
        } else {
            remainingText = `约 ${(remainingSeconds / 3600).toFixed(1)} 小时`;
        }
        elements.progressDetail.textContent = `${detail} | 剩余 ${remainingText}`;
    } else {
        elements.progressDetail.textContent = detail;
    }
}

// 显示结果表格
function showResultTable() {
    elements.resultSection.style.display = 'block';
    elements.progressSection.style.display = 'none';

    // 统计超长单元格数量
    let overLimitCount = 0;
    state.translatedData.forEach(row => {
        state.selectedLanguages.forEach(code => {
            if (row.translations[code]?.isOverLimit) {
                overLimitCount++;
            }
        });
    });

    // 显示统计信息
    if (overLimitCount > 0) {
        elements.resultSummary.innerHTML = `<span class="summary-warning">⚠️ 有 ${overLimitCount} 个单元格超出长度限制，已高亮显示</span>`;
    } else {
        elements.resultSummary.innerHTML = `<span class="summary-success">✓ 翻译完成，所有结果均在长度限制内</span>`;
    }
    elements.resultSummary.style.display = 'block';

    // 显示下载按钮
    elements.downloadSection.style.display = 'block';

    // 构建表头
    const headerCells = ['<th>源语言</th>'];
    state.selectedLanguages.forEach(code => {
        const lang = LANGUAGES.find(l => l.code === code);
        headerCells.push(`<th>${lang?.nativeName || code}</th>`);
    });
    elements.tableHead.innerHTML = `<tr>${headerCells.join('')}</tr>`;

    // 构建表格内容
    const rows = state.translatedData.map((row) => {
        const cells = [`<td class="source-column">${escapeHtml(row.source)}</td>`];

        state.selectedLanguages.forEach(code => {
            const translation = row.translations[code];
            let cellClass = '';
            let cellContent = translation?.text || '-';

            // 只显示高亮，不显示文字
            if (translation?.isOverLimit) {
                cellClass = 'cell-warning';
            }
            if (translation?.error) {
                cellClass = '';
            }

            cells.push(`<td class="${cellClass}">${escapeHtml(cellContent)}</td>`);
        });

        return `<tr>${cells.join('')}</tr>`;
    });

    elements.tableBody.innerHTML = rows.join('');

    // 滚动到结果区域
    elements.resultSection.scrollIntoView({ behavior: 'smooth' });
}

// HTML 转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 下载 CSV
function downloadCSV() {
    const headers = ['源语言', ...state.selectedLanguages.map(code => {
        const lang = LANGUAGES.find(l => l.code === code);
        return lang?.nativeName || code;
    })];

    const rows = state.translatedData.map(row => {
        const rowData = [row.source];
        state.selectedLanguages.forEach(code => {
            rowData.push(row.translations[code]?.text || '');
        });
        return rowData.map(cell => escapeCSVCell(cell)).join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.originalFileName}_translated.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// CSV 单元格转义
function escapeCSVCell(cell) {
    if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
        return `"${cell.replace(/"/g, '""')}"`;
    }
    return cell;
}

// 移除文件
function removeFile() {
    state.csvData = [];
    state.headers = [];
    state.translatedData = [];
    state.selectedLanguages = [];
    state.totalRequests = 0;
    state.completedRequests = 0;
    state.startTime = null;

    elements.fileInput.value = '';
    elements.fileInfo.style.display = 'none';
    elements.uploadArea.style.display = 'block';
    elements.resultSection.style.display = 'none';
    elements.progressSection.style.display = 'none';
    elements.previewSection.style.display = 'none';
    elements.estimateSection.style.display = 'none';

    document.querySelectorAll('.lang-tag').forEach(tag => {
        tag.classList.remove('selected');
        tag.style.pointerEvents = 'auto';
        tag.style.opacity = '1';
    });
    elements.selectedCount.textContent = '0';

    // 解锁配置
    unlockConfiguration();

    updateTranslateButton();
}

// 折叠/展开区块
function toggleSection(section) {
    const content = document.getElementById(`${section}-content`);
    const toggle = document.getElementById(`${section}-toggle`);

    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('collapsed');
        content.style.maxHeight = null;
        toggle.style.transform = 'rotate(0deg)';
    }
}

// 显示错误
function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorToast.style.display = 'flex';

    setTimeout(() => {
        closeError();
    }, 5000);
}

// 关闭错误
function closeError() {
    elements.errorToast.style.display = 'none';
}

// 切换密码显示/隐藏
function togglePassword() {
    const input = elements.apiKey;
    const icon = document.getElementById('eyeIcon');

    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = '🙈';
    } else {
        input.type = 'password';
        icon.textContent = '👁️';
    }
}

// 测试 API 并获取可用模型
async function testApi() {
    const t = i18n[currentLang];
    const apiKey = elements.apiKey.value.trim();
    const apiBase = elements.apiBase.value.trim();

    if (!apiKey || !apiBase) {
        elements.testResult.textContent = t.apiNotConfigured;
        elements.testResult.className = 'test-result error';
        return;
    }

    // 显示加载状态
    elements.testApiBtn.disabled = true;
    elements.testApiBtn.classList.add('loading');
    elements.testApiBtn.textContent = t.testing;
    elements.testResult.textContent = '';

    try {
        // 先尝试获取模型列表
        const modelsUrl = apiBase.replace(/\/$/, '') + '/models';
        let models = [];

        try {
            const modelsResponse = await fetch(modelsUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });

            if (modelsResponse.ok) {
                const modelsData = await modelsResponse.json();
                models = modelsData.data?.map(m => m.id) || [];
            }
        } catch (e) {
            console.log('无法获取模型列表，使用默认模型');
        }

        // 测试翻译 API
        const testResponse = await fetch(`${apiBase.replace(/\/$/, '')}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: models[0] || 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: 'Hi' }],
                max_tokens: 5
            })
        });

        if (testResponse.ok) {
            elements.testResult.textContent = t.testSuccess;
            elements.testResult.className = 'test-result success';

            // 填充模型下拉框
            elements.modelSelect.innerHTML = '';
            if (models.length > 0) {
                models.forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    elements.modelSelect.appendChild(option);
                });
            } else {
                // 添加默认选项
                const defaultModels = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4o', 'deepseek-chat'];
                defaultModels.forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    elements.modelSelect.appendChild(option);
                });
            }

            // 自动选择第一个模型
            if (elements.modelSelect.options.length > 0) {
                elements.modelSelect.selectedIndex = 0;
                elements.modelName.value = elements.modelSelect.value;
            }
        } else {
            const errorData = await testResponse.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `Error: ${testResponse.status}`);
        }
    } catch (error) {
        elements.testResult.textContent = `${t.testFailed}: ${error.message}`;
        elements.testResult.className = 'test-result error';
    } finally {
        elements.testApiBtn.disabled = false;
        elements.testApiBtn.classList.remove('loading');
        elements.testApiBtn.textContent = t.testApi;
    }
}

// 模型选择变化时更新输入框
function onModelSelectChange() {
    if (elements.modelSelect.value) {
        elements.modelName.value = elements.modelSelect.value;
    }
}

// 初始化应用
init();
