export const procedureResource = {
  "resourceType": "Procedure",
  "status": "completed",
  "subject": {
    "reference": "Patient/1"
  },
  "encounter": {
    "reference": "Encounter/1"
  },
  "request": {
    "reference": "ProcedureRequest/1"
  },
  "performedDateTime": "2016-10-09",
  "code": {
    "coding": [
      {
        "system": "pshr:valueset:procedure-codes",
        "code": "1102",
        "display": "Laser tonsillectomy"
      }
    ]
  }
}
  