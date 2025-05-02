import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cibilScore: null,
  eligibleLoanAmount: null,
  requestedLoanAmount: null,
  amountDisbursed: null,
  repaymentAmount: null,
  processingFee: null,
  disbursalDate: null,
  repaymentDate: null,
  bankAccountLast4: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateCibil: (state, action) => {
      state.cibilScore = action.payload;
    },
    updateEligibleLoanAmount: (state, action) => {
      state.eligibleLoanAmount = action.payload;
    },
    updateRequestedLoanAmount: (state, action) => {
      state.requestedLoanAmount = action.payload;
    },
    updateAmountDisbursed: (state, action) => {
      state.amountDisbursed = action.payload;
    },
    updateRepaymentAmount: (state, action) => {
      state.repaymentAmount = action.payload;
    },
    updateProcessingFee: (state, action) => {
      state.processingFee = action.payload;
    },
    setDisbursalDate: (state) => {
      state.disbursalDate = Date.now();
    },
    updateRepaymentDate: (state, action) => {
      state.repaymentDate = action.payload;
    },
    updateBankAccountLast4: (state, action) => {
      state.bankAccountLast4 = action.payload;
    },
    resetUserData: () => initialState,
  },
});

export const {
  updateName,
  updateCibil,
  updateEligibleLoanAmount,
  updateRequestedLoanAmount,
  updateAmountDisbursed,
  updateRepaymentAmount,
  updateProcessingFee,
  setDisbursalDate,
  updateRepaymentDate,
  updateBankAccountLast4,
  resetUserData,
} = userDataSlice.actions;

export default userDataSlice.reducer; 