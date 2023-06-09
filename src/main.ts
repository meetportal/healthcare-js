/**
 * Const used to identify the patient resource type
 */
export const PATIENT_TYPE = 'patient'
export const PATIENT_VERSION = __APP_VERSION__

export type Phone = {
  type: 'home' | 'mobile' | 'work' | 'other'
  number: string
}

export type Demographics = {
  ids: string[]
  firstName?: string
  lastName?: string
  /**
   * Date of birth
   * @format DD/MM/YYYY
   */
  dob?: string
  birthSex?: string
  email?: string
  phones?: Phone[]
  address1?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
}

export type Insurance = {
  insurance?: string
  hasMedicare?: boolean
  hasMedicaid?: boolean
}

export type PatientResource = {
  id: string
  type: 'patient'
  version: string
  demographics?: Demographics
  insurance?: Insurance
}
