/**
 * Const used to identify the patient resource type
 */
export const PATIENT_TYPE = 'patient'

export type PatientResource = {
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
