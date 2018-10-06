import { 
    calculateFirstMonthlyPayment, 
    calculateMonthlyDecrease, 
    calculateTotalPayment as total1
} from "./capital.js";
import {
    calculateMonthlyPayment,
    calculateTotalPayment as total2,
} from "./capitalPlusInterest.js";

const capital = 2500000;
const rate = 0.049/12;
const terms = 25*12;
    
test("total payment of average capital is valid", () => {
    const totalPayment1 = total1(capital, rate, terms);
    expect(totalPayment1/10000).toBeCloseTo(403.6, 1);
})

test("monthly payment of average capital is valid", () => {
    const firstMonth = calculateFirstMonthlyPayment(capital, rate, terms);
    expect(firstMonth).toBeCloseTo(18542, 0);
})

test("monthly decrease is valid", () => {
    const monthlyDecrease = calculateMonthlyDecrease(capital, rate, terms);
    expect(monthlyDecrease).toBeCloseTo(34, 0);
})

test("total payment of average capital plus interest is valid", () => {
    const totalPayment2 = total2(capital, rate, terms);
    expect(totalPayment2/10000).toBeCloseTo(434.1, 1);
})

test("monthly payment of average capital plus interest is valid", () => {
    const monthly = calculateMonthlyPayment(capital, rate, terms);
    expect(monthly).toBeCloseTo(14469, 0);
})