import React, { useState } from 'react';

// src/animal-husbandry
import DomesticAnimalInsuranceClaimRecommendation from './animal-husbandry/DomesticAnimalInsuranceClaimRecommendation';
import DomesticAnimalMaternityNutritionAllowance from './animal-husbandry/DomesticAnimalMaternityNutritionAllowance';

// src/appeal
import AllowanceForm from './appeal/AllowanceForm';
import ApplicationforIndigenousNationalityCertification from './appeal/ApplicationforIndigenousNationalityCertification'
import ApplicationforKhasAryaCasteCertification from './appeal/ApplicationforKhasAryaCasteCertification'
import BusinessDeregistrationForm from './appeal/BusinessDeregistrationForm'
import BusinessRegistrationSignatureForm from './appeal/BusinessRegistrationSignatureForm'
import CitizenshipwithHusbandSurname from './appeal/CitizenshipwithHusbandSurname'
import CitizenshipwithoutHusbandSurname from './appeal/CitizenshipwithoutHusbandSurname'
import DalitCasteCertification from './appeal/DalitCasteCertification'
import ImpoverishedCitizenApplicationandRecommendation from './appeal/ImpoverishedCitizenApplicationandRecommendation'
import LandBoundaryVerificationForm from './appeal/LandBoundaryVerificationForm'
import RequestforCertification from './appeal/RequestforCertification'
import RequestforCertificationMotherFather from './appeal/RequestforCertificationMotherFather'
import TribalVerificationRecommendation from './appeal/TribalVerificationRecommendation'

// src/business-recommendation
import BusinessClosed from './business-recommendation/BusinessClosed';
import BusinessExtensionPannumber from './business-recommendation/BusinessExtensionPannumber';
import BusinessRegSummary from './business-recommendation/BusinessRegSummary';
import IndustryChange from './business-recommendation/IndustryChange';
import IndustryClosedNotify from './business-recommendation/IndustryClosedNotify';
import IndustryFormCancellation from './business-recommendation/IndustryFormCancellation';
import IndustryPeriodSummary from './business-recommendation/IndustryPeriodSummary';
import IndustryRegistrationRecommendation from './business-recommendation/IndustryRegistrationRecommendation';
import IndustryTransferAcceptanceLetter from './business-recommendation/IndustryTransferAcceptanceLetter';
import IndustryTransferAcceptanceReq from './business-recommendation/IndustryTransferAcceptanceReq';
import NewBusinessPannumber from './business-recommendation/NewBusinessPannumber';
import PartnershipRegistrationApplicationForm from './business-recommendation/PartnershipRegistrationApplicationForm';
import ShopAgriculturalForm from './business-recommendation/ShopAgriculturalForm';
import ShopRegistrationForm from './business-recommendation/ShopRegistrationForm';
import TaxClearCertificate from './business-recommendation/TaxClearCertificate';

// src/business-reg
import BusinessIndustryRegistrationForm from './business-reg/BusinessIndustryRegistrationForm';
import BusinessIndustryRegistrationNewList from './business-reg/BusinessIndustryRegistrationNewList';
import BusinessRegRenewCompleted from './business-reg/BusinessRegRenewCompleted';
import BusinessRegistrationCertificate from './business-reg/BusinessRegistrationCertificate';
import BusinessRegistrationRenewLeft from './business-reg/BusinessRegistrationRenewLeft';

// src-daily-work-execute
import DailyWorkPerformanceList from './daily-work-execute/DailyWorkPerformanceList';

// src/english-format
import RelationshipVerificationEnglish from './english-format/RelationshipVerificationEnglish';
import ScholarshipVerification from './english-format/ScholarshipVerification';
import PowerofAttorney from './english-format/PowerofAttorney';
import BirthDateVerification from './english-format/BirthDateVerification';
import AddressVerification from './english-format/AddressVerification';
import AnnualIncomeCertificate from './english-format/AnnualIncomeCertificate';
import UnmarriedVerificationEnglish from './english-format/UnmarriedVerificationEnglish';
import TaxClearanceCertificate from './english-format/TaxCleranceCertificate';
import TaxClearBasic from './english-format/TaxClearBasic';
import SamePersonCertificate from './english-format/SamePersonCertificate';
import PropertyValuationReport from './english-format/PropertyValuationReport';
import OccupationVerification from './english-format/OccupationVerification';
import MarriageCertificateEnglish from './english-format/MarriageCertificateEnglish';
import EconomicStatus from './english-format/EconomicStatus';
import DigitalVerification from './english-format/DigitalVerification';
import CertificateOfOccupation from './english-format/CertificateofOccupation';

// src/english-format/new
import AddressVerificationNew from './english-format/new/AddressVerificationNew';
import AnnualIncomeVerificationNew from './english-format/new/AnnualIncomeVerificationNew';
import BirthCertificate from './english-format/new/BirthCertificate';
import OccupationVerificationNew from './english-format/new/OccupationVerificationNew';
import SurnameVerificationAfterMarriage from './english-format/new/SurnameVerificationAfterMarriage';
import SurnameVerificationCertificateNew from './english-format/new/SurnameVerificationCertificateNew';
import TaxClearanceNewFormat from './english-format/new/TaxClearanceNewFormat';
import VerifyRevisedEmblem from './english-format/new/VerifyRevisedEmblem';

// src/society-family
import BehaviorRecommendation from './society-family/BehaviorRecommendation';
import BeneficiaryAllowanceTransfer from './society-family/BeneficiaryAllowanceTransfer';
import BirthOrSettlementRecommendation from './society-family/BirthOrSettlementRecommendation';
import BirthVerificationNepali from './society-family/BirthVerificationNepali';
import DemisedHeirRecommendation from './society-family/DemisedHeirRecommendation';
import DemisedSecurityAllowanceToHeir from './society-family/DemisedSecurityAllowanceToHeir';
import DestituteRecommendation from './society-family/DestituteRecommendation';
import DisabilityIdentityCardRecommendation from './society-family/DisabilityIdentityCardRecommendation';
import DisableIdentityCardRenew from './society-family/DisableIdentityCardRenew';
import ElectricityConnectionRecommendation from './society-family/ElectricityConnectionRecommendation';
import EthnicIdentityRecommendation from './society-family/EthnicIdentityRecommendation';
import FreeHealthInsuranceRequest from './society-family/FreeHealthInsuranceRequest';
import IncomeSourceCertification from './society-family/IncomeSourceCertification';
import InternalMigrationRecommendation from './society-family/InternalMigrationRecommendation';
import JesthaNagarikSifarisWada from './society-family/JesthaNagarikSifarisWada';
import MarriageCertificate from './society-family/MarriageCertificate';
import MinorIdentityCard from './society-family/MinorIdentityCard';
import MinorIdentityCardRecommendation from './society-family/MinorIdentityCardRecommendation';
import NewBirthVerification from './society-family/NewBirthVerification';
import NoSecondMarriageRecommendation from './society-family/NoSecondMarriageRecommendation';
import OldAgeAllowanceForm from './society-family/OldAgeAllowanceForm';
import PermanentResidenceRecommendation from './society-family/PermanentResidenceRecommendation';
import RelationTemporaryResidence from './society-family/RelationTemporaryResidence';
import RelationshipVerification from './society-family/RelationshipVerification';
import SocialSecurityAllowanceRecommendation from './society-family/SocialSecurityAllowanceRecommendation';
import SocialSecurityRecommendation from './society-family/SocialSecurityRecommendation';
import TemporaryResidenceRecommendation from './society-family/TemporaryResidenceRecommendation';
import ThreeGenerationCertificate from './society-family/ThreeGenerationCertificate';
import TribalRecommendation from './society-family/TribalRecommendation';
import UnmarriedVerification from './society-family/UnmarriedVerification';

import './App.css';

function App() {
  const [form, setForm] = useState('allowance');

  const renderForm = () => {
    switch (form) {
      // src/animal-husbandry
      case 'domesticanimalinsuranceclaim':
        return <DomesticAnimalInsuranceClaimRecommendation />;
      case 'domesticanimalmaternitynutrition':
        return <DomesticAnimalMaternityNutritionAllowance />;
      // src/appeal
      case 'allowance':
        return <AllowanceForm />;
      case 'applicationforindigenousnationality':
        return <ApplicationforIndigenousNationalityCertification />;
      case 'applicationforkhasaryacaste':
        return <ApplicationforKhasAryaCasteCertification />;
      case 'businessderegistrationform':
        return <BusinessDeregistrationForm />;
      case 'businessregsignature':
        return <BusinessRegistrationSignatureForm />;
      case 'citizenshipwithhusbandsurname':
        return <CitizenshipwithHusbandSurname />;
      case 'citizenshipwithouthusbandsurname':
        return <CitizenshipwithoutHusbandSurname />;
      case 'dalitcastecertification':
        return <DalitCasteCertification />;
      case 'improvisedcitizenapplication':
        return <ImpoverishedCitizenApplicationandRecommendation />;
      case 'landboundaryverify':
        return <LandBoundaryVerificationForm />;
      case 'reqforcertification':
        return <RequestforCertification />;
      case 'reqforcertificationmotherfather':
        return <RequestforCertificationMotherFather />;
      case 'trivalverifyrecommend':
        return <TribalVerificationRecommendation />;
      // src/daily-work-execute
      case 'dailyworkperformance':
        return <DailyWorkPerformanceList />;
      // src/english-format
      case 'relationshipenglish':
        return <RelationshipVerificationEnglish />;
      case 'scholarship':
        return <ScholarshipVerification />;
      case 'powerofattorney':
        return <PowerofAttorney />;
      case 'address':
        return <AddressVerification />;
      case 'annualincome':
        return <AnnualIncomeCertificate />;
      case 'unmarriedenglish':
        return <UnmarriedVerificationEnglish />;
      case 'taxclerance':
        return <TaxClearanceCertificate />;
      case 'taxclearbasic':
        return <TaxClearBasic />;
      case 'sameperson':
        return <SamePersonCertificate />;
      case 'propertyvaluation':
        return <PropertyValuationReport />;
      case 'occupationverification':
        return <OccupationVerification />;
      case 'marriageenglish':
        return <MarriageCertificateEnglish />;
      case 'economicstatus':
        return <EconomicStatus />;
      case 'digital':
        return <DigitalVerification />;
      case 'certificateofoccupation':
        return <CertificateOfOccupation />;
      case 'birthdate':
        return <BirthDateVerification />;
      // src/english-format/new
      case 'newaddress':
        return <AddressVerificationNew />;
      case 'annualincomenew':
        return <AnnualIncomeVerificationNew />;
      case 'birthcertificate':
        return <BirthCertificate />;
      case 'occupationnew':
        return <OccupationVerificationNew />;
      case 'surnameaftermarriage':
        return <SurnameVerificationAfterMarriage />;
      case 'surnamecertificate':
        return <SurnameVerificationCertificateNew />;
      case 'taxclearancenew':
        return <TaxClearanceNewFormat />;
      case 'revisedemblem':
        return <VerifyRevisedEmblem />;
      // src/business-reg
      case 'businessindustryregistration':
        return <BusinessIndustryRegistrationForm />;
      case 'newbusinessindustryregistration':
        return <BusinessIndustryRegistrationNewList />;
      case 'businessregnenewcompleted':
        return <BusinessRegRenewCompleted />;
      case 'businessregcertificate':
        return <BusinessRegistrationCertificate />;
      case 'businessregistrationrenewleft':
        return <BusinessRegistrationRenewLeft />;
      // src/business-recommendation
      case 'businessclosed':
        return <BusinessClosed />;
      case 'businessextension':
        return <BusinessExtensionPannumber />;
      case 'businessregsummary':
        return <BusinessRegSummary />;
      case 'industrychange':
        return <IndustryChange />;
      case 'industryclosednotify':
        return <IndustryClosedNotify />;
      case 'industryformcancel':
        return <IndustryFormCancellation />;
      case 'industryperiodsummary':
        return <IndustryPeriodSummary />;
      case 'industryregrecommend':
        return <IndustryRegistrationRecommendation />;
      case 'industryacceptanceletter':
        return <IndustryTransferAcceptanceLetter />;
      case 'industrytransferacceptreq':
        return <IndustryTransferAcceptanceReq />;
      case 'newbusinesspan':
        return <NewBusinessPannumber />;
      case 'partnershipapplication':
        return <PartnershipRegistrationApplicationForm />;
      case 'shopagricultureform':
        return <ShopAgriculturalForm />;
      case 'shopreg':
        return <ShopRegistrationForm />;
      case 'taxclearcertificate':
        return <TaxClearCertificate />;
      // src/society-family
      case 'behaviorrecommend':
        return <BehaviorRecommendation />;
      case 'beneficiaryallowancetransfer':
        return <BeneficiaryAllowanceTransfer />;
      case 'birthorsettlementrecommend':
        return <BirthOrSettlementRecommendation />;
      case 'birthverifynepali':
        return <BirthVerificationNepali />;
      case 'demisedheirrecommend':
        return <DemisedHeirRecommendation />;
      case 'demisedsecurityallowance':
        return <DemisedSecurityAllowanceToHeir />;
      case 'destituterecommend':
        return <DestituteRecommendation />;
      case 'disabilityidentitycardrecommend':
        return <DisabilityIdentityCardRecommendation />;
      case 'disableidentitycardrenew':
        return <DisableIdentityCardRenew />;
      case 'electricityconnection':
        return <ElectricityConnectionRecommendation />;
      case 'ethnicidentityrecommend':
        return <EthnicIdentityRecommendation />;
      case 'freehealthinsurance':
        return <FreeHealthInsuranceRequest />;
      case 'incomesourcecertificate':
        return <IncomeSourceCertification />;
      case 'internalmigrationrecommend':
        return <InternalMigrationRecommendation />;
      case 'jesthanagariksifariswada':
        return <JesthaNagarikSifarisWada />;
      case 'marriagecertificate':
        return <MarriageCertificate />;
      case 'minoridentitycard':
        return <MinorIdentityCard />;
      case 'minoridentitycardrecommend':
        return <MinorIdentityCardRecommendation />;
      case 'newbirthverify':
        return <NewBirthVerification />;
      case 'nosecondmarriage':
        return <NoSecondMarriageRecommendation />;
      case 'oldageallowance':
        return <OldAgeAllowanceForm />;
      case 'permanentresidencerecommend':
        return <PermanentResidenceRecommendation />;
      case 'relationshipverify':
        return <RelationshipVerification />;
      case 'relationtemporaryresidence':
        return <RelationTemporaryResidence />;
      case 'socialallowancerecommend':
        return <SocialSecurityAllowanceRecommendation />;
      case 'socialsecurityrecommend':
        return <SocialSecurityRecommendation />;
      case 'temporaryresidencerecommend':
        return <TemporaryResidenceRecommendation />;
      case 'threegenerationcertificate':
        return <ThreeGenerationCertificate />;
      case 'tribalrecommend':
        return <TribalRecommendation />;
      case 'unmarriedverify':
        return <UnmarriedVerification />;
      
      
      

      default:
        return <AllowanceForm />;
    }
  };

  return (
    <div className="App">
      <select onChange={(e) => setForm(e.target.value)} value={form}>

        <option value="domesticanimalinsuranceclaim">Domestic Animal Insurance Claim Recommendation</option>
        <option value="domesticanimalmaternitynutrition">Domestic Animal Maternity Nutrition Allowance</option>

        <option value="allowance">Allowance Form</option>
        <option value="applicationforindigenousnationality">Application for Indigenous Nationality Certification</option>
        <option value="applicationforkhasaryacaste">Application for Khas Arya Caste Certification</option>
        <option value="businessderegistrationform">Business Deregistration Form</option>
        <option value="businessregsignature">Business Registration Signature Form</option>
        <option value="citizenshipwithhusbandsurname">Citizenship with Husband Surname</option>
        <option value="citizenshipwithouthusbandsurname">Citizenship without Husband Surname</option>
        <option value="dalitcastecertification">Dalit Caste Certification</option>
        <option value="improvisedcitizenapplication">Impoverished Citizen Application and Recommendation</option>
        <option value="landboundaryverify">LandBoundary Verification Form</option>
        <option value="reqforcertification">Request for Certification</option>
        <option value="reqforcertificationmotherfather">Request for Certification Mother Father</option>
        <option value="trivalverifyrecommend">Tribal Verification Recommendation</option>

        <option value="dailyworkperformance">Daily Work Performance List</option>

        <option value="relationshipenglish">Relationship Verification English</option>
        <option value="scholarship">Scholarship Verification</option>
        <option value="powerofattorney">Power Of Attorney</option>
        <option value="birthdate">Birthdate Verification</option>
        <option value="address">Address Verification</option>
        <option value="annualincome">Annual Income Certificate</option>
        <option value="unmarriedenglish">Unmarried Verification English</option>
        <option value="taxclerance">Tax Clearance Certificate</option>
        <option value="taxclearbasic">Tax Clear Basic</option>
        <option value="propertyvaluation">Property Valuation Report</option>
        <option value="occupationverification">Occupation Verification</option>
        <option value="marriageenglish">Marriage Certificate English</option>
        <option value="economicstatus">Economic Status</option>
        <option value="digital">Digital Verification</option>
        <option value="certificateofoccupation">Certificate Of Occupation</option>
        <option value="sameperson">Same Person Certificate</option>

        <option value="newaddress">Address Verification New</option>
        <option value="annualincomenew">Annual Income Verification New</option>
        <option value="birthcertificate">Birth Certificate</option>
        <option value="occupationnew">Occupation Verification New</option>
        <option value="surnameaftermarriage">Surname Verification After Marriage</option>
        <option value="surnamecertificate">Surname Verification Certificate New</option>
        <option value="taxclearancenew">Tax Clearance New Format</option>
        <option value="revisedemblem">Verify Revised Emblem</option>

        <option value="businessindustryregistration">Business Industry Registration Form</option>
        <option value="newbusinessindustryregistration">Business Industry Registration New List</option>
        <option value="businessregnenewcompleted">Business Reg Renew Completed</option>
        <option value="businessregcertificate">Business Registration Certificate</option>
        <option value="businessregistrationrenewleft">Business Registration Renew Left</option>

        <option value="businessclosed">BusinessClosed</option>
        <option value="businessextension">BusinessExtensionPannumber</option>
        <option value="businessregsummary">BusinessRegSummary</option>
        <option value="industrychange">IndustryChange</option>
        <option value="industryclosednotify">IndustryClosedNotify</option>
        <option value="industryformcancel">IndustryFormCancellation</option>
        <option value="industryperiodsummary">IndustryPeriodSummary</option>
        <option value="industryregrecommend">IndustryRegistrationRecommendation</option>
        <option value="industryacceptanceletter">IndustryTransferAcceptanceLetter</option>
        <option value="industrytransferacceptreq">IndustryTransferAcceptanceReq</option>
        <option value="newbusinesspan">NewBusinessPannumber</option>
        <option value="partnershipapplication">PartnershipRegistrationApplicationForm</option>
        <option value="shopagricultureform">ShopAgriculturalForm</option>
        <option value="shopreg">ShopRegistrationForm</option>
        <option value="taxclearcertificate">TaxClearCertificate</option>

        <option value="behaviorrecommend">BehaviorRecommendation</option>
        <option value="beneficiaryallowancetransfer">BeneficiaryAllowanceTransfer</option>
        <option value="birthorsettlementrecommend">BirthOrSettlementRecommendation</option>
        <option value="birthverifynepali">BirthVerificationNepali</option>
        <option value="demisedheirrecommend">DemisedHeirRecommendation</option>
        <option value="demisedsecurityallowance">DemisedSecurityAllowanceToHeir</option>
        <option value="destituterecommend">DestituteRecommendation</option>
        <option value="disabilityidentitycardrecommend">DisabilityIdentityCardRecommendation</option>
        <option value="disableidentitycardrenew">DisableIdentityCardRenew</option>
        <option value="electricityconnection">ElectricityConnectionRecommendation</option>
        <option value="ethnicidentityrecommend">EthnicIdentityRecommendation</option>
        <option value="freehealthinsurance">FreeHealthInsuranceRequest</option>
        <option value="incomesourcecertificate">IncomeSourceCertification</option>
        <option value="internalmigrationrecommend">InternalMigrationRecommendation</option>
        <option value="jesthanagariksifariswada">JesthaNagarikSifarisWada</option>
        <option value="marriagecertificate">MarriageCertificate</option>
        <option value="minoridentitycard">MinorIdentityCard</option>
        <option value="minoridentitycardrecommend">MinorIdentityCardRecommendation</option>
        <option value="newbirthverify">NewBirthVerification</option>
        <option value="nosecondmarriage">NoSecondMarriageRecommendation</option>
        <option value="oldageallowance">OldAgeAllowanceForm</option>
        <option value="permanentresidencerecommend">PermanentResidenceRecommendation</option>
        <option value="relationshipverify">RelationshipVerification</option>
        <option value="relationtemporaryresidence">RelationTemporaryResidence</option>
        <option value="socialallowancerecommend">SocialSecurityAllowanceRecommendation</option>
        <option value="socialsecurityrecommend">SocialSecurityRecommendation</option>
        <option value="temporaryresidencerecommend">TemporaryResidenceRecommendation</option>
        <option value="threegenerationcertificate">ThreeGenerationCertificate</option>
        <option value="tribalrecommend">TribalRecommendation</option>
        <option value="unmarriedverify">UnmarriedVerification</option>

      </select>

      {renderForm()}
    </div>
  );
}

export default App;
