import utils from "../../utils/index.js";

const maximumSocialSecurityPaymentBase = 25401;
const minimumSocialSecurityPaymentBase = 3387;
const accumulationFundRatio = 0.12;
const pensionInsurancePersonalRatio = 0.08;
const pensionInsuranceCompanyRatio = 0.19;
const medicalInsurancePersonalRatio = 0.02;
const medicalInsuranceCompanyRatio = 0.10;
const unemploymentInsurancePersonalRatio = 0.002;
const unemploymentInsuranceCompanyRatio = 0.008;
const industrialInjuryInsuranceCompanyRatio = 0.04;
const birthInsuranceCompanyRatio = 0.08;

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
            companyRatio: unemploymentInsuranceCompanyRatio,
            companyValue: 0,
        },
        industrialInjuryInsurance: {
            companyRatio: industrialInjuryInsuranceCompanyRatio,
            companyValue: 0,
        },
        birthInsurance: {
            companyRatio: birthInsuranceCompanyRatio,
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
    if (!checkValid(this.data)) return;

    const {
        grossWage,
        socialSecurityPaymentBase,
        accumulationFundPaymentBase,
    } = this.data;

    const accumulationFundValue = accumulationFundPaymentBase * accumulationFundRatio;
    const pensionInsurancePersonalValue = socialSecurityPaymentBase * pensionInsurancePersonalRatio;
    const pensionInsuranceCompanyValue = socialSecurityPaymentBase * pensionInsuranceCompanyRatio;
    const medicalInsurancePersonalValue = socialSecurityPaymentBase * medicalInsurancePersonalRatio;
    const medicalInsuranceCompanyValue = socialSecurityPaymentBase * medicalInsuranceCompanyRatio;
    const unemploymentInsurancePersonalValue = socialSecurityPaymentBase * unemploymentInsurancePersonalRatio;
    const unemploymentInsuranceCompanyValue = socialSecurityPaymentBase * unemploymentInsuranceCompanyRatio;
    const industrialInjuryInsuranceValue = socialSecurityPaymentBase * industrialInjuryInsuranceCompanyRatio;
    const birthInsuranceValue = socialSecurityPaymentBase * birthInsuranceCompanyRatio;
    const totalDeductionInsurancePersonalValue = accumulationFundValue + pensionInsurancePersonalValue +
        medicalInsurancePersonalValue + unemploymentInsurancePersonalValue;
    const totalDeductionInsuranceCompanyValue = accumulationFundValue + pensionInsuranceCompanyValue +
        medicalInsuranceCompanyValue + unemploymentInsuranceCompanyValue + industrialInjuryInsuranceValue +
        birthInsuranceValue;
    const taxableWage = grossWage - totalDeductionInsurancePersonalValue;
    const personalIncomeTax = utils.incomeTax(taxableWage);
    const afterTaxWage = taxableWage - personalIncomeTax;

    this.setData({
        taxableWage,
        personalIncomeTax,
        afterTaxWage,
        showAfterTaxWage: true,
        "accumulationFund.personalValue": accumulationFundValue,
        "accumulationFund.companyValue": accumulationFundValue,
        "pensionInsurance.personalValue": pensionInsurancePersonalValue,
        "pensionInsurance.companyValue": pensionInsuranceCompanyValue,
        "medicalInsurance.personalValue": medicalInsurancePersonalValue,
        "medicalInsurance.companyValue": medicalInsuranceCompanyValue,
        "unemploymentInsurance.personalValue": unemploymentInsurancePersonalValue,
        "unemploymentInsurance.companyValue": unemploymentInsuranceCompanyValue,
        "industrialInjuryInsurance.companyValue": industrialInjuryInsuranceValue,
        "birthInsurance.companyValue": birthInsuranceValue,
        "totalDeductionInsurance.personalValue": totalDeductionInsurancePersonalValue,
        "totalDeductionInsurance.companyValue": totalDeductionInsuranceCompanyValue,
    });
}

function checkValid(data) {
    const alert = utils.alert;

    if (!data) return false;
    const {
        grossWage,
        socialSecurityPaymentBase,
        accumulationFundPaymentBase
    } = data;

    if (!grossWage) {
        alert("请输入税前工资");
        return false;
    }

    if (!socialSecurityPaymentBase) {
        alert("请输入社保基数");
        return false;
    }

    if (!accumulationFundPaymentBase) {
        alert("请输入公积金基数");
        return false;
    }

    return true;
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