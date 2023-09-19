export type InsuranceType = 'CASCO' | 'RCA'

export interface InsuranceSchema {
  firstName: string,
  lastName: string,
  dateOfBirth: string
  type: InsuranceType | ''
  model: string
  productionYear: number | string
  licenseNumber: string
  chassisSeries: string
  nrKilometers: number | string
}

export interface SelectOptionsTypes {
  key: string,
  value: InsuranceType,
  text: InsuranceType
}

export type RcaPayloadRequest = Omit<InsuranceSchema, 'chassisSeries' | 'nrKilometers'>

export interface RcaInsurance extends RcaPayloadRequest {}

export type CascoPayloadRequest = Omit<InsuranceSchema, 'model' | 'productionYear' | 'licenseNumber'>

export interface CascoInsurance extends CascoPayloadRequest {}

export interface InsuranceSlice {
  insurances: {
    casco: CascoInsurance[],
    rca: RcaInsurance[],
  },
  count: number,
  primes: number[]
}

