// 该文件包含等额本金相关的计算公式

/**
 * 计算首月还款额
 * 
 * 计算公式
 * c / t + c * r
 * 
 * 其中，c 本金，t 还款月数，r 贷款月息
 * @param {number} capitalInYuan 本金，以元为单位
 * @param {number} rateInMonth 月息
 * @param {number} termInMonth 还款月数
 */
export function calculateFirstMonthlyPayment(capitalInYuan, rateInMonth, termInMonth) {
    return capitalInYuan / termInMonth + capitalInYuan * rateInMonth;
}

/**
 * 计算还款递减数目
 * 
 * 计算公式
 * c * r / t
 * @param {number} capitalInYuan 
 * @param {number} rateInMonth 
 * @param {number} termInMonth 
 */
export function calculateMonthlyDecrease(capitalInYuan, rateInMonth, termInMonth) {
    return capitalInYuan * rateInMonth / termInMonth;
}

/**
 * 计算还款总额
 * 
 * 计算公式
 * c + 0.5 * c * r * (1+t)
 * @param {number} capitalInYuan 
 * @param {number} rateInMonth 
 * @param {number} termInMonth 
 */
export function calculateTotalPayment(capitalInYuan, rateInMonth, termInMonth) {
    const totalInterest = 0.5 * capitalInYuan * rateInMonth * (1+termInMonth);
    return capitalInYuan + totalInterest;
}