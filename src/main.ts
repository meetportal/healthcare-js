/**
 * Const used to identify the patient resource type
 */
export const PATIENT_TYPE = 'patient'

export type PatientData = {
  ids: string[]
  firstName?: string
  lastName?: string
  dob?: string
  sex?: string
  email?: string
  phone?: string
  address?: string
  address2?: string
  city?: string
  zip?: string
}

export type PatientResource = {
  id: string
  type: 'patient'
  data?: PatientData
}
