import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export const FilterProvider = ({ children }) => {
  const [columnPrefix, setColumnPrefix] = useState(true)
  const [columnInsurance, setColumnInsurance] = useState(true)
  const [columnNetwork, setColumnNetwor] = useState(true)
  const [columnFacility, setColumnFacility] = useState(true)
  const [columnResDays, setColumnResDays] = useState(true)
  const [columnResVisits, setColumnResVisits] = useState(true)
  const [columnDetoxDays, setColumnDetoxDays] = useState(true)
  const [columnDetoxVisits, setColumnDetoxVisits] = useState(true)
  const [columnTotalCharged, setColumnTotalCharged] = useState(true)
  const [columnTotalPaid, setColumnTotalPaid] = useState(true)
  const [columnPayout, setColumnPayout] = useState(true)
  const [columnAdmission, setColumnAdmission] = useState(true)
  const [columnAdmissionPercent, setColumnAdmissionPercent] = useState(true)

  const [columnPolicy, setColumnPolicy] = useState(true)
  const [columnName, setColumnName] = useState(true)
  const [columnClaimNumber, setColumnClaimNumber] = useState(true)
  const [columnClaimState, setColumnClaimState] = useState(true)
  const [columnClaimStatus, setColumnClaimStatus] = useState(true)
  const [columnReasoning, setColumnReasoning] = useState(true)
  const [columnDeductable, setColumnDeducatable] = useState(true)

  const toggleColumnPrefix = () => {
    setColumnPrefix(!columnPrefix)
  }

  const toggleColumnInsurance = () => {
    setColumnInsurance(!columnInsurance)
  }

  const toggleColumnNetworK = () => {
    setColumnNetwor(!columnNetwork)
  }

  const toggleColumnFacility = () => {
    setColumnFacility(!columnFacility)
  }

  const toggleColumnResDays = () => {
    setColumnResDays(!columnResDays)
  }

  const toggleColumnResVisits = () => {
    setColumnResVisits(!columnResVisits)
  }

  const toggleColumnDetoxDays = () => {
    setColumnDetoxDays(!columnDetoxDays)
  }

  const toggleColumnDetoxVisits = () => {
    setColumnDetoxVisits(!columnDetoxVisits)
  }

  const toggleColumnTotalCharged = () => {
    setColumnTotalCharged(!columnTotalCharged)
  }

  const toggleColumnTotalPaid = () => {
    setColumnTotalPaid(!columnTotalPaid)
  }

  const toggleColumnPayout = () => {
    setColumnPayout(!columnPayout)
  }

  const toggleColumnAdmission = () => {
    setColumnAdmission(!columnAdmission)
  }

  const toggleColumnAdmissionPercent = () => {
    setColumnAdmissionPercent(!columnAdmissionPercent)
  }

  const toggleColumnPolicy = () => {
    setColumnPolicy(!columnPolicy)
  }
  
  const toggleColumnName = () => {
    setColumnName(!columnName)
  }

  const toggleColumnClaimNumber = () => {
    setColumnClaimNumber(!columnClaimNumber)
  }

  const toggleColumnClaimState = () => {
    setColumnClaimState(!columnClaimState)
  }

  const toggleColumnClaimStatus = () => {
    setColumnClaimStatus(!columnClaimStatus)
  }

  const toggleColumnReasoning = () => {
    setColumnReasoning(!columnReasoning)
  }

  const toggleColumnDeductable = () => {
    setColumnDeducatable(!columnDeductable)
  }

  return (
    <FilterContext.Provider value={{  columnPrefix, 
                                      columnInsurance,
                                      columnNetwork, 
                                      columnFacility,
                                      columnResDays, 
                                      columnResVisits,
                                      columnDetoxDays, 
                                      columnDetoxVisits,
                                      columnTotalCharged, 
                                      columnTotalPaid,
                                      columnPayout, 
                                      columnAdmission,
                                      columnAdmissionPercent, 
                                      columnPolicy,
                                      columnName,
                                      columnClaimNumber,
                                      columnClaimState,
                                      columnClaimStatus,
                                      columnReasoning,
                                      columnDeductable,
                                      toggleColumnPrefix,
                                      toggleColumnInsurance,
                                      toggleColumnNetworK,
                                      toggleColumnFacility,
                                      toggleColumnResDays,
                                      toggleColumnResVisits,
                                      toggleColumnDetoxDays,
                                      toggleColumnDetoxVisits,
                                      toggleColumnTotalCharged,
                                      toggleColumnTotalPaid,
                                      toggleColumnPayout,
                                      toggleColumnAdmission,
                                      toggleColumnAdmissionPercent,
                                      toggleColumnPolicy,
                                      toggleColumnName,
                                      toggleColumnClaimNumber,
                                      toggleColumnClaimState,
                                      toggleColumnClaimStatus,
                                      toggleColumnReasoning,
                                      toggleColumnDeductable}}>
      {children}
    </FilterContext.Provider>
  );
};
