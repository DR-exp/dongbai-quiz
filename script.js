// ========== 题目数据（15 题） ==========
const questions = [
    {
        text: "有人跟你约架，你咋整？",
        options: [
            { text: "沈阳大街见他，指定没他好果汁吃", type: "aggressive" },
            { text: "摇人，叫兄弟一起上", type: "social" },
            { text: "先谈判，能和平解决最好", type: "peaceful" },
            { text: "想办法智取，不硬刚", type: "cunning" }
        ]
    },
    {
        text: "你的经典绝活是？",
        options: [
            { text: "咬打火机", type: "aggressive" },
            { text: "后空翻", type: "showy" },
            { text: "喊话表演", type: "social" },
            { text: "我没有绝活", type: "lazy" }
        ]
    },
    {
        text: "你穿衣服的风格？",
        options: [
            { text: "绿衣，虎哥同款", type: "showy" },
            { text: "杀马特造型，越夸张越好", type: "showy" },
            { text: "随便穿，舒服就行", type: "lazy" },
            { text: "讲究搭配，有品位", type: "rational" }
        ]
    },
    {
        text: "遇到难事了你咋办？",
        options: [
            { text: "自己硬扛，不麻烦别人", type: "independent" },
            { text: "找兄弟帮忙，摇人！", type: "social" },
            { text: "能拖就拖", type: "lazy" },
            { text: "想办法智取", type: "cunning" }
        ]
    },
    {
        text: "别人欠你钱不还，你？",
        options: [
            { text: "直接上门要，不给就走", type: "aggressive" },
            { text: "委婉提醒", type: "peaceful" },
            { text: "发朋友圈暗示", type: "cunning" },
            { text: "算了，当认清一个人", type: "independent" }
        ]
    },
    {
        text: "你平时说话的风格？",
        options: [
            { text: "张口就是狠话", type: "aggressive" },
            { text: "幽默风趣", type: "social" },
            { text: "少说多听", type: "independent" },
            { text: "讲道理", type: "rational" }
        ]
    },
    {
        text: "你手机铃声是？",
        options: [
            { text: "红山果", type: "showy" },
            { text: "经典老歌", type: "peaceful" },
            { text: "默认铃声", type: "lazy" },
            { text: "静音，震动就行", type: "independent" }
        ]
    },
    {
        text: "你交朋友看重啥？",
        options: [
            { text: "义气，够不够意思", type: "generous" },
            { text: "能不能聊到一起", type: "social" },
            { text: "人品怎么样", type: "rational" },
            { text: "有没有用", type: "cunning" }
        ]
    },
    {
        text: "有人插队你咋整？",
        options: [
            { text: "直接给他拎出去", type: "aggressive" },
            { text: "礼貌提醒", type: "peaceful" },
            { text: "假装没看见", type: "lazy" },
            { text: "找工作人员", type: "rational" }
        ]
    },
    {
        text: "你理想中的生活是？",
        options: [
            { text: "有钱有面儿，前呼后拥", type: "showy" },
            { text: "老婆孩子热炕头", type: "peaceful" },
            { text: "自由自在，没人管", type: "independent" },
            { text: "事业有成，家庭和睦", type: "rational" }
        ]
    },
    {
        text: "你 KTV 必点的歌是？",
        options: [
            { text: "兄弟干杯类", type: "generous" },
            { text: "红山果", type: "showy" },
            { text: "情歌", type: "peaceful" },
            { text: "不会唱，当气氛组", type: "social" }
        ]
    },
    {
        text: "有人跟你炫耀，你？",
        options: [
            { text: "比他更狠", type: "aggressive" },
            { text: "笑笑不说话", type: "peaceful" },
            { text: "心里鄙视", type: "cunning" },
            { text: "真心祝福", type: "generous" }
        ]
    },
    {
        text: "你咋看待爱情？",
        options: [
            { text: "人生大事，必须重视", type: "rational" },
            { text: "凑合过呗，还能离咋滴", type: "peaceful" },
            { text: "随缘，不强求", type: "independent" },
            { text: "麻烦，不想整", type: "lazy" }
        ]
    },
    {
        text: "你遇到挫折咋办？",
        options: [
            { text: "越挫越勇", type: "aggressive" },
            { text: "找朋友倾诉", type: "social" },
            { text: "自己消化", type: "independent" },
            { text: "躺平摆烂", type: "lazy" }
        ]
    },
    {
        text: "最后一题：你觉得你是啥样的人？",
        options: [
            { text: "沈阳大街狠人，说一不二", type: "aggressive" },
            { text: "老实人，与世无争", type: "peaceful" },
            { text: "聪明人，懂得变通", type: "cunning" },
            { text: "明白人，活得通透", type: "rational" }
        ]
    }
];

// ========== 人物结果数据（8 位核心角色） ==========
const characters = [
    {
        name: "虎哥",
        avatar: "images/huge.png",
        quotes: [
            "你就是歌姬吧！",
            "我宣布个事儿：我是个傻 O！",
            "团长，我 TM 来了！你人呢？",
            "你狗屁才艺！"
        ],
        desc: "沈阳大街的传奇人物，东百往事绝对主角。擅长喊话表演，经典语录无数。'我宣布个事儿：我是个傻 O！'一战成名。绿衣是他的标志，与刀哥搭档拍摄了大量经典短视频。白城之战后名声大噪，随后与杀马特团长的沈阳大战更是奠定其江湖地位。",
        story: "你就像虎哥一样，是人群中的焦点人物。遇到事情从不退缩，敢于正面刚，说话办事都讲究个排面。在朋友眼里，你是那个永远冲在最前面的人，有你在就有人罩着。但有时候过于冲动，容易被人当枪使。你的人生信条就是：不服就干，指定没他好果汁吃！",
        matchTypes: ["aggressive", "social", "showy", "peaceful"]
    },
    {
        name: "刀哥",
        avatar: "images/daoge.png",
        quotes: [
            "指定没有你好果汁吃嗷！",
            "干哈你，别去，他们银多！",
            "你比泰深都牛逼",
            "这位更是重量级",
            "哒哒哒嘀哒哒"
        ],
        desc: "虎哥的黄金搭档，人狠话不多。绝活是咬打火机，这个名场面流传至今。关键时刻总能稳住局面，是团队里的定海神针。在虎哥情绪激动时，刀哥往往是那个拉他一把的人。沈阳大战中与虎哥并肩作战，共同面对杀马特家族的挑战。",
        story: "你就像刀哥一样，话不多但句句在理。朋友遇到困难时，你是那个默默伸出援手的人，不会说太多漂亮话，但行动永远到位。你做事稳重，不会像某些人那样头脑发热。但真要把你惹急了，咬打火机这种绝活你也干得出来。",
        matchTypes: ["aggressive", "rational", "independent", "peaceful"]
    },
    {
        name: "杀马特团长",
        avatar: "images/tuanzhang.png",
        quotes: [
            "你躲哪儿去了！",
            "老师，我想跳舞",
            "是在下输了",
            "串！串！香！"
        ],
        desc: "杀马特家族领袖，虎哥的宿命对手。沈阳大战单刀赴会，一敌三擒获刀哥、小亮、唐老鸭两人。最终比舞认输，但成功策反黑牛，让虎哥戴上头套加入杀马特家族，堪称逆转之王。这一战成为东百往事最经典的剧情之一。",
        story: "你就像团长一样，外表张扬但内心有谋略。看似冲动行事，实则步步为营。在团队中你是精神领袖，能凝聚人心。遇到强敌时敢于单刀赴会，输了也认，这份气度不是谁都有的。你相信：只要兄弟在，输赢都不怕。",
        matchTypes: ["showy", "social", "aggressive", "peaceful"]
    },
    {
        name: "唐老鸭",
        avatar: "images/tanglaoya.png",
        quotes: [
            "这个弟中之弟！",
            "踢死他！"
        ],
        desc: "虎哥方成员，沈阳大战中被团长擒获。经典台词'弟中之弟'流传甚广，是东百往事中的喜剧担当。被刀哥讲述有《上吊》事件，是团队里的开心果。虽常被调侃，但在团队中有着不可替代的存在感。",
        story: "你就像唐老鸭一样，是朋友圈里的开心果。说话幽默风趣，经常成为大家调侃的对象，但你从不往心里去。你活得通透，知道什么时候该认真，什么时候该装傻。朋友聚会少了你就少了很多乐趣，你是那个让大家开心的人。",
        matchTypes: ["social", "lazy", "generous", "cunning"]
    },
    {
        name: "雷公小亮",
        avatar: "images/xiaoliang.png",
        quotes: [
            "草！走！忽略！ጿ ኈ ቼ ዽ ጿ",
            "后空翻！"
        ],
        desc: "虎哥徒弟，会后空翻的狠人。一个后空翻加一句'草走忽略'成为名场面，这个动作被无数人模仿。在沈阳大战中被团长擒获，是虎哥阵营里的新生代代表。作为团队里的年轻人，他总是冲在最前面展示绝活。",
        story: "你就像小亮一样，年轻有冲劲，是团队里的新生力量。你有一技之长（后空翻/某种技能），这是你的立身之本。你崇拜前辈，愿意跟着他们学习，但有时候也容易被人当炮灰。你的人生才刚刚开始，未来有无限可能。",
        matchTypes: ["showy", "aggressive", "social", "lazy"]
    },
    {
        name: "黑牛",
        avatar: "images/heiniu.png",
        quotes: [
            "团长，对不起",
            "我叛变了"
        ],
        desc: "原是团长方大徒弟，后叛变投靠虎哥。最终给虎哥戴上头套'精神控制'，让他加入杀马特家族，堪称卧底之王。这一操作被粉丝称为'红山果行动'，是沈阳大战中最具戏剧性的转折点。",
        story: "你就像黑牛一样，心思缜密，善于谋划。表面上看你是墙头草，实际上你一直在为自己的利益考虑。你懂得审时度势，知道什么时候该站哪边。朋友说你不够义气，但你自己知道，这只是生存之道。最后的赢家往往是你这种人。",
        matchTypes: ["cunning", "rational", "independent", "generous"]
    },
    {
        name: "彪姐",
        avatar: "images/biaojie.png",
        quotes: [
            "彪姐，我爱你，你让我陷入疯狂！",
            "你们别争了",
            "我不属于任何人"
        ],
        desc: "虎哥和旋风哥争夺的对象，东百往事中的女性代表人物。'彪姐，我爱你，你让我陷入疯狂！'成为经典表白。她在整个故事中保持着独立的态度，没有完全偏向任何一方，是这场江湖纷争中的关键人物。",
        story: "你就像彪姐一样，在感情和人际关系中保持着独立的态度。有人为你争风吃醋，但你心里清楚自己想要什么。你不是谁的附属品，你有自己的想法和追求。朋友很多，但真正走进你内心的人很少。你活得明白，知道什么该争取，什么该放手。",
        matchTypes: ["peaceful", "independent", "rational", "generous"]
    },
    {
        name: "赵三金",
        avatar: "images/zhaosanjin.png",
        quotes: [
            "拟态baby🌶️",
            "白城我说了算",
            "好悬把我李宁踹开线"
        ],
        desc: "虎哥在白城之战的对手，生意场上的狠角色。有脑子会算计，黑白两道都给面子，是东百往事中的智囊型人物。与虎哥的白城之战是东百往事前传的重要剧情，这场较量展现了两人之间的恩怨情仇。",
        story: "你就像赵三金一样，是团队里的军师。遇到事情你先算计，不会头脑发热。你懂得人情世故，黑白两道都能说上话。朋友说你太现实，但你自己知道，这才是成年人的生存方式。你的人生信条是：义气要有，但脑子更不能少。",
        matchTypes: ["cunning", "rational", "aggressive", "social"]
    },
    {
        name: "旋风哥",
        avatar: "images/xuanfeng.png",
        quotes: [
            "你们什么旋风啊？往后稍一稍！",
            "东百第一基",
            "吃就完了"
        ],
        desc: "以重口味整活视频闻名，代表作'吃粪便配敌敌畏'后被刀哥打假。与彪姐曾为情侣关系，引发虎哥与其的感情争夺战。在'这位更是重量级'名场面中被虎哥喊话宣战。因与多位角色的男酮向互动被称为'东百第一基'。",
        story: "你就像旋风哥一样，敢于挑战常人无法接受的事物。你不在乎外界眼光，活出自己的风格。在感情上，你执着且占有欲强，对于失去的东西总是念念不忘。朋友说你太极端，但你自己知道，这只是你表达自我的方式。",
        matchTypes: ["aggressive", "showy", "independent", "generous"]
    }
];

// ========== 全局变量 ==========
let currentQuestionIndex = 0;
let userAnswers = [];
let typeScores = {};

// ========== DOM 元素 ==========
const introPage = document.getElementById('introPage');
const quizPage = document.getElementById('quizPage');
const resultPage = document.getElementById('resultPage');
const startBtn = document.getElementById('startBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shareModal = document.getElementById('shareModal');
const modalClose = document.getElementById('modalClose');
const shareBtn = document.getElementById('shareBtn');
const restartBtn = document.getElementById('restartBtn');

// ========== 初始化 ==========
function init() {
    // 创建雪花
    createSnowflakes();
    
    // 绑定事件
    startBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    modalClose.addEventListener('click', () => shareModal.classList.add('hidden'));
    shareBtn.addEventListener('click', showShareModal);
    restartBtn.addEventListener('click', restartQuiz);
    
    // 初始化分数
    resetScores();
}

// ========== 雪花动画 ==========
function createSnowflakes() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakeChars = ['❄', '❅', '❆', '✦', '*'];
    
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
        snowflake.style.animationDelay = (Math.random() * 5) + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowContainer.appendChild(snowflake);
    }
}

// ========== 分数管理 ==========
function resetScores() {
    typeScores = {
        aggressive: 0,
        peaceful: 0,
        social: 0,
        cunning: 0,
        generous: 0,
        rational: 0,
        practical: 0,
        lazy: 0,
        independent: 0,
        showy: 0
    };
}

function calculateTypeScores() {
    resetScores();
    userAnswers.forEach(answer => {
        if (answer && questions[answer.questionIndex]) {
            const selectedOption = questions[answer.questionIndex].options[answer.optionIndex];
            if (selectedOption) {
                typeScores[selectedOption.type]++;
            }
        }
    });
}

// ========== 页面切换 ==========
function startQuiz() {
    introPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
}

function showResult() {
    quizPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    
    calculateTypeScores();
    const result = calculateResult();
    displayResult(result);
}

function restartQuiz() {
    resultPage.classList.add('hidden');
    introPage.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
    resetScores();
}

// ========== 答题逻辑 ==========
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    progressFill.style.width = ((currentQuestionIndex) / questions.length * 100) + '%';
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    
    // 生成选项
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => selectOption(index));
        
        // 检查是否已选择
        const existingAnswer = userAnswers.find(a => a.questionIndex === currentQuestionIndex);
        if (existingAnswer && existingAnswer.optionIndex === index) {
            btn.classList.add('selected');
        }
        
        optionsContainer.appendChild(btn);
    });
    
    // 更新导航按钮
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '看结果 →' : '下一题 →';
}

function selectOption(optionIndex) {
    // 移除同题其他选择
    userAnswers = userAnswers.filter(a => a.questionIndex !== currentQuestionIndex);
    userAnswers.push({ questionIndex: currentQuestionIndex, optionIndex });
    
    // 更新 UI
    document.querySelectorAll('.option-btn').forEach((btn, index) => {
        btn.classList.toggle('selected', index === optionIndex);
    });
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    const hasAnswer = userAnswers.some(a => a.questionIndex === currentQuestionIndex);
    
    if (!hasAnswer) {
        alert('必须选一个选项你听到没有。装逼我让你飞起来！');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResult();
    }
}

// ========== 结果计算 ==========
function calculateResult() {
    // 计算每个人物的匹配度
    const characterScores = characters.map(char => {
        let score = 0;
        char.matchTypes.forEach(type => {
            score += (typeScores[type] || 0);
        });
        return { character: char, score };
    });
    
    // 排序取最高
    characterScores.sort((a, b) => b.score - a.score);
    
    const topCharacter = characterScores[0].character;
    const maxPossibleScore = questions.length;
    const actualScore = characterScores[0].score;
    const matchPercent = Math.min(100, Math.round((actualScore / maxPossibleScore) * 100) + 50);
    
    return {
        character: topCharacter,
        matchPercent: matchPercent,
        allScores: characterScores
    };
}

function displayResult(result) {
    const { character, matchPercent } = result;

    document.getElementById('characterAvatar').src = character.avatar;
    document.getElementById('characterAvatar').alt = character.name;
    document.getElementById('characterName').textContent = character.name;
    document.getElementById('characterQuote').textContent = `"${character.quotes[0]}"`;
    
    // 显示更多台词
    const moreQuotesEl = document.getElementById('moreQuotes');
    if (character.quotes.length > 1) {
        moreQuotesEl.innerHTML = character.quotes.slice(1).map(quote => 
            `<span class="quote-tag">${quote}</span>`
        ).join('');
    } else {
        moreQuotesEl.innerHTML = '';
    }
    
    document.getElementById('characterDesc').textContent = character.desc;
    document.getElementById('characterStoryText').textContent = character.story;

    // 匹配度动画
    setTimeout(() => {
        document.getElementById('matchFill').innerHTML = `<div class="fill" style="width: ${matchPercent}%"></div>`;
        document.getElementById('matchPercent').textContent = `${matchPercent}%`;
    }, 100);

    // 分享卡片
    document.getElementById('shareAvatar').src = character.avatar;
    document.getElementById('shareAvatar').alt = character.name;
    document.getElementById('shareName').textContent = character.name;
    document.getElementById('shareQuote').textContent = character.quotes[0];
}

// ========== 分享功能 ==========
function showShareModal() {
    shareModal.classList.remove('hidden');
}

// ========== 启动 ==========
document.addEventListener('DOMContentLoaded', init);
