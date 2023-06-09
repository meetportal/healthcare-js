## HealthCare Library for Portal

This library provides functionality for web applications integrating into Portal.

### Installation

```bash
npm install @orango/healthcare-js
```

### Usage

```ts
import { usePortalService } from '@meetportal/portal-js'
import { PATIENT_TYPE, PATIENT_VERSION PatientResource } from '@meetportal/healthcare-js'

let resource: PatientResource = {
  id: '123',
  type: PATIENT_TYPE,
  version: PATIENT_VERSION,
  demographics: {
    ids: ['123'],
    firstName: 'John',
    lastName: 'Doe',
    dob: '01/01/1970',
    birthSex: 'M',
    email: 'john.doe@mail.com',
    phones: [
      {
        type: 'home',
        number: '123-456-7890',
      },
    ],
    address1: '123 Main St',
    address2: 'Apt 1',
    city: 'Anytown',
    state: 'NY',
    zip: '12345',
  },
  insurance: {
    insurance: 'Medicare',
    hasMedicare: true,
    hasMedicaid: false,
  },
}

usePortalService().setResource(resource)
```

<div class="footer">
  <div>Released under the <a href="https://opensource.org/license/mit/">MIT License</a>.</div>
  <div>2023-present &copy; Orango</div>
</div>
