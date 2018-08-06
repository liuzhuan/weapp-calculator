import utils from "../../utils/index.js";

const maximumSocialSecurityPaymentBase = 25401;
const minimumSocialSecurityPaymentBase = 3387;

Page({
    data: {
        grossWage: 0,
        taxableWage: 0,
        personalIncomeTax: 0,
        afterTaxWage: 0,
        cityName: "北京",
        socialSecurityPaymentBase: 0,
        accumulationFundPaymentBase: 0,
        hasAcculationFund: true,
        hasSocialSecurity: true,
        accumulationFund: {
            personalRatio: 0.12,
            personalValue: 0,
            companyRatio: 0.12,
            companyValue: 0,
        },
        pensionInsurance: {
            personalRatio: 0.08,
            personalValue: 0,
            companyRatio: 0.19,
            companyValue: 0,
        },
        medicalInsurance: {
            personalRatio: 0.02,
            personalValue: 0,
            companyRatio: 0.10,
            companyValue: 0,
        },
        unemploymentInsurance: {
            personalRatio: 0.002,
            personalValue: 0,
            companyRatio: 0.008,
            companyValue: 0,
        },
        industrialInjuryInsurance: {
            companyRatio: 0.04,
            companyValue: 0,
        },
        birthInsurance: {
            companyRatio: 0.08,
            companyValue: 0,
        },
        totalDeductionInsurance: {
            personalValue: 0,
            companyValue: 0,
        },
    },
    input,
    onCalculate,
})

function onCalculate(e) {
    console.log("calculate");
}

function input(e) {
    console.log(e);
    const { name } = e.currentTarget.dataset;
    const value = e.detail.value;
    console.log(name, value);
}
