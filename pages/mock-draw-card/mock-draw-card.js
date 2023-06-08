// pages/mock-draw-card/mock-draw-card.js
// 当前抽数
let count = 0;
// 保底数
const MAX_COUNT = 90;
// 基础概率
let probability = 0.006;
// 最大随机数
const MAX = 1000;
// 最小随机数
const MIN = 1;
// 抽中的范围
let range = [];
// 概率变化基准抽数
const baseline = 73;
// 每次递增概率
const increase_pro = 0.06;

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    // 基础种子
    seed_num: 0,
    /**
     * 抽卡
     */
    onLoad() {
        this.seed_num = this.seed();
    },
    drawCard() {
        count++;
        this.getGoldRange();
        if (count <= baseline) {
            const num = this.seed();
            const flag = this.isGetGold(num);
            if (flag) {
                console.log('恭喜你抽中了，抽数为:', count);
                return;
            }
            this.drawCard();
        } else if (count <= MAX_COUNT - 1) {
            probability += increase_pro;
            const num = this.seed();
            const flag = this.isGetGold(num);
            if (flag) {
                console.log('恭喜你抽中了，抽数为:', count);
                return;
            }
            this.drawCard();
        } else {
            console.log('恭喜你抽中了，抽数为:', count);
        }
    },
    /**
     * 生成随机数
     */
    seed() {
        return Math.floor(Math.random() * MAX) + MIN;
    },
    /**
     * 获取出金的范围
     */
    getGoldRange() {
        const baseRange = probability * MAX;
        range = [this.seed_num - Math.floor(baseRange / 2), this.seed_num + Math.ceil(baseRange / 2)];
    },
    /**
     * 判断是否命中抽金
     * @param {*} num 当前抽数
     */
    isGetGold(num) {
        if (num >= range[0] && num <= range[1]) {
            return true;
        }
        return false;
    }
})