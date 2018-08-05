import utils from "../../utils/index.js";

Page({
    data: {
        grossWage: 0,
        taxableWage: 0,
        personalIncomeTax: 0,
        afterTaxWage: 0,
        cityName: "北京",
        socialSecurityPaymentBase: 0,
        maximumSocialSecurityPaymentBase: 25401,
        minimumSocialSecurityPaymentBase: 3387,
        accumulationFundPaymentBase: 0,
        hasAcculationFund: true,
        hasSocialSecurity: true,
        accumulationFund: {
            personalRatio: 0.12,
            personalValue: 0,
            companyRatio: 0.12,
            personalValue: 0,
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
    }
})
