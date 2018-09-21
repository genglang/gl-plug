export const WEEKS = [
    {
        title: '周日',
        id: 'Sun',
    },
    {
        title: '周一',
        id: 'Mon',
    },
    {
        title: '周二',
        id: 'Tue',
    },
    {
        title: '周三',
        id: 'Wed',
    },
    {
        title: '周四',
        id: 'Thu',
    },
    {
        title: '周五',
        id: 'Fri',
    },
    {
        title: '周六',
        id: 'Sat',
    },
];
export const HOURS = [
    '0小时', '1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '9小时', '10小时',
    '11小时', '12小时', '13小时', '14小时', '15小时', '16小时', '17小时', '18小时', '19小时', '20小时',
    '21小时', '22小时', '23小时', '24小时'
];
export const MIMUTES = [
    '0分钟', '1分钟', '2分钟', '3分钟', '4分钟', '5分钟', '6分钟', '7分钟', '8分钟', '9分钟',
    '10分钟', '11分钟', '12分钟', '13分钟', '14分钟', '15分钟', '16分钟', '17分钟', '18分钟', '19分钟',
    '20分钟', '21分钟', '22分钟', '23分钟', '24分钟', '25分钟', '26分钟', '27分钟', '28分钟', '29分钟',
    '30分钟', '31分钟', '32分钟', '33分钟', '34分钟', '35分钟', '36分钟', '37分钟', '38分钟', '39分钟',
    '40分钟', '41分钟', '42分钟', '43分钟', '44分钟', '45分钟', '46分钟', '47分钟', '48分钟', '49分钟',
    '50分钟', '51分钟', '52分钟', '53分钟', '54分钟', '55分钟', '56分钟', '57分钟', '58分钟', '59分钟'
];
export const SECONDS = [
    '0秒', '1秒', '2秒', '3秒', '4秒', '5秒', '6秒', '7秒', '8秒', '9秒',
    '10秒', '11秒', '12秒', '13秒', '14秒', '15秒', '16秒', '17秒', '18秒', '19秒',
    '20秒', '21秒', '22秒', '23秒', '24秒', '25秒', '26秒', '27秒', '28秒', '29秒',
    '30秒', '31秒', '32秒', '33秒', '34秒', '35秒', '36秒', '37秒', '38秒', '39秒',
    '40秒', '41秒', '42秒', '43秒', '44秒', '45秒', '46秒', '47秒', '48秒', '49秒',
    '50秒', '51秒', '52秒', '53秒', '54秒', '55秒', '56秒', '57秒', '58秒', '59秒'
];
export const TEMPERATURE = [
    -30, -29, -28, -27, -26, -25, -24, -23, -22, -21,
    -20, -19, -18, -17, -16, -15, -14, -13, -12, -11,
    -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];
export const HUMIDITY = [
    '0%', '1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%',
    '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%',
    '21%', '22%', '23%', '24%', '25%', '26%', '27%', '28%', '29%', '30%',
    '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39%', '40%',
    '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49%', '50%',
    '51%', '52%', '53%', '54%', '55%', '56%', '57%', '58%', '59%', '60%',
    '61%', '62%', '63%', '64%', '65%', '66%', '67%', '68%', '69%', '70%',
    '71%', '72%', '73%', '74%', '75%', '76%', '77%', '78%', '79%', '80%',
    '81%', '82%', '83%', '84%', '85%', '86%', '87%', '88%', '89%', '90%',
    '91%', '92%', '93%', '94%', '95%', '96%', '97%', '98%', '99%', '100%'
];

export function getCardColor() {
    let randomIndex = Math.floor(Math.random() * 5);
    return COLORDATA[randomIndex];
}

/**
 * 整理选中的星期整理成文字形式
 * @param weeks
 * @returns {string}
 */
export function getSelectedWeeksDayDescription(weeks) {
    //拼接选中日子的描述
    let total = 0;
    let repeatDescription = '';
    for (let i = 0; i < 7; i++) {
        let day = weeks[i];
        if (day) {
            repeatDescription = repeatDescription + WEEKS[i].title + ',';
            total = total + Math.pow(2, i);
        }
    }
    if (total === 0) {
        repeatDescription = '仅今天，';
    } else if (total === 96) {
        repeatDescription = '周末，';
    } else if (total === 31) {
        repeatDescription = '工作日，';
    } else if (total === 127) {
        repeatDescription = '每天，';
    }

    return repeatDescription;
}

/**
 * 把日期对象转换为xx:xx格式
 * @param date
 * @returns {string}
 */
export function getTimeString(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours >= 10 ? hours : '0' + hours;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    return hours + ':' + minutes;
}

/**
 * 转换字符串对象为文字描述形式
 * @param date
 * @returns {string}
 */
export function getFullTimeString(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let moonString;
    if (hours > 6 && hours <= 11) { // 获取前缀
        moonString = '上午';
    } else if (hours > 11 && hours <= 14) {
        moonString = '中午';
    } else if (hours > 14 && hours <= 18) {
        moonString = '下午';
        hours > 12 ? hours = hours - 12 : hours;
    } else if (hours > 18 && hours <= 24) {
        moonString = '晚上';
        hours = hours - 12;
    } else {
        moonString = '凌晨';
    }
    hours = hours >= 10 ? hours : '0' + hours;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    return moonString + hours + ':' + minutes;
}

/**
 * 将xx:xx格式的时间补全文字描述
 * @param timeString
 */
export function getFullTimeStringByTimeString(timeString) {
    let hours = parseInt(timeString);
    let moonString;
    if (hours > 6 && hours <= 11) { // 获取前缀
        moonString = '上午';
    } else if (hours > 11 && hours <= 14) {
        moonString = '中午';
    } else if (hours > 14 && hours <= 18) {
        moonString = '下午';
        hours > 12 ? hours = hours - 12 : hours;
    } else if (hours > 18 && hours <= 24) {
        moonString = '晚上';
        hours = hours - 12;
    } else {
        moonString = '凌晨';
    }
    return moonString + timeString;
}
