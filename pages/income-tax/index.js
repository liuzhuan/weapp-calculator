import utils from "../../utils/index.js";

const maximumSocialSecurityPaymentBase = 25401;
const minimumSocialSecurityPaymentBase = 3387;
const accumulationFundRatio = 0.12;
const pensionInsurancePersonalRatio = 0.08;
const pensionInsuranceCompanyRatio = 0.19;
const medicalInsurancePersonalRatio = 0.02;
const medicalInsuranceCompanyRatio = 0.10;
const unemploymentInsurancePersonalRatio = 0.002;

Page({
    data: {
        grossWage: 0,
        taxableWage: 0,
        personalIncomeTax: 0,
        afterTaxWage: 0,
        showAfterTaxWage: false,
        cityName: "北京",
        socialSecurityPaymentBase: 0,
        accumulationFundPaymentBase: 0,
        hasAcculationFund: true,
        hasSocialSecurity: true,
        accumulationFund: {
            personalRatio: accumulationFundRatio,
            personalValue: 0,
            companyRatio: accumulationFundRatio,
            companyValue: 0,
        },
        pensionInsurance: {
            personalRatio: pensionInsurancePersonalRatio,
            personalValue: 0,
            companyRatio: pensionInsuranceCompanyRatio,
            companyValue: 0,
        },
        medicalInsurance: {
            personalRatio: medicalInsurancePersonalRatio,
            personalValue: 0,
            companyRatio: medicalInsuranceCompanyRatio,
            companyValue: 0,
        },
        unemploymentInsurance: {
            personalRatio: unemploymentInsurancePersonalRatio,
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
    doTheMath.call(this);
}

function doTheMath() {
    const {
        grossWage,
        socialSecurityPaymentBase,
        accumulationFundPaymentBase,
    } = this.data;
}

function input(e) {
    const { name } = e.currentTarget.dataset;
    const value = e.detail.value;
    this.setData({
        [name]: value,
        showAfterTaxWage: false,
    });

    if (name === "grossWage") {
        updateSecurityAndAccumulationFundPaymentBase.call(this, value);
    }
}

function updateSecurityAndAccumulationFundPaymentBase(grossWage) {
    let paymentBase = Math.max(minimumSocialSecurityPaymentBase, grossWage);
    paymentBase = Math.min(paymentBase, maximumSocialSecurityPaymentBase);

    this.setData({
        socialSecurityPaymentBase: paymentBase,
        accumulationFundPaymentBase: paymentBase
    });
}