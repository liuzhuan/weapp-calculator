// 该文件包含等额本息相关的计算公式

/**
 * 获取等额本息月均还款额
 * 
 * 计算公式如下：
 * c * r * (1+r)^t / ((1+r)^t - 1)
 * 其中 c 是本金，r 是月息，t 是还款月数
 * 
 * @param {number} capitalInYuan 本金，以元为单位
 * @param {number} rateInMonth 贷款月息
 * @param {number} termInMonth 还款月数
 */
export function calculateMonthlyPayment(capitalInYuan, rateInMonth, termInMonth) {
    const ratio = Math.pow((1+rateInMonth), termInMonth);
    return capitalInYuan * rateInMonth * ratio / (ratio - 1);
}

export function calculateTotalPayment(capitalInYuan, rateInMonth, termInMonth) {
    const monthlyPayment = calculateMonthlyPayment(
            capitalInYuan, 
            rateInMonth, 
            termInMonth
        );
    
    return monthlyPayment * termInMonth;
}