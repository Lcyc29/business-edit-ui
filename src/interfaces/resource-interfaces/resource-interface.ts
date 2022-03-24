import { CorpTypeCd, CorrectionTypes, FilingCodes, NameRequestEntityTypes } from '@/enums'

/** Interface to define the resource model example */
export interface ResourceIF {
  entityType: CorpTypeCd
  entityReference: string
  contactLabel?: string
  displayName: string
  nameRequestType: NameRequestEntityTypes
  addressLabel: string
  filingData: {
    entityType: CorpTypeCd
    filingTypeCode: FilingCodes
    priority?: boolean
  }
  changeData?: {
    nameChangeOptions?: Array<CorrectionTypes>
    typeChangeInfo?: string
  }
  certifyClause: string
}
