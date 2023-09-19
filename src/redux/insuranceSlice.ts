import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CascoPayloadRequest, InsuranceSlice, RcaPayloadRequest } from '../meta/interfaces/insurance';
import { toast } from 'react-toastify';
import { ToastsMessages } from '../meta/types/toasts';
import { generatePrime } from '../services/utils';

const initialState: InsuranceSlice = {
  insurances: {
    casco: [],
    rca: [],
  },
  count: 0,
  primes: []
};

export const insuranceSlice = createSlice({
  name: 'insurances',
  initialState,
  reducers: {
    createRcaInsurance: (state, { payload } : PayloadAction<RcaPayloadRequest>) => {
      state.insurances.rca.push(payload)
      state.count = state.insurances.rca.length + state.insurances.casco.length
      state.primes.push(generatePrime())
      toast.success(ToastsMessages.RCA_CREATED);
    },
    createCascoInsurance: (state, { payload } : PayloadAction<CascoPayloadRequest>) => {
      state.insurances.casco.push(payload)
      state.count = state.insurances.rca.length + state.insurances.casco.length
      state.primes.push(generatePrime())
      toast.success(ToastsMessages.CASCO_CREATED);
    },
  },
});

export const { createRcaInsurance, createCascoInsurance } = insuranceSlice.actions;

export default insuranceSlice.reducer;
