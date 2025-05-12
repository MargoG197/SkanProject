

type THistogramData = {
  issueDateInterval: {
  "startDate": string,
  "endDate": string
},
"searchContext": {
  "targetSearchEntitiesContext": {
    "targetSearchEntities": [
      {
        "type": "company",
        "sparkId": null,
        "entityId": null,
        "inn": string,
        "maxFullness": boolean,
        "inBusinessNews": null
      }
    ],
    "onlyMainRole": boolean,
    "tonality": string,
    "onlyWithRiskFactors": boolean,
    "riskFactors": {
      "and": [],
      "or": [],
      "not": []
    },
    "themes": {
      "and": [],
      "or": [],
      "not": []
    }
  },
  "themesFilter": {
    "and": [],
    "or": [],
    "not": []
  }
},
"searchArea": {
  "includedSources": [],
  "excludedSources": [],
  "includedSourceGroups": [],
  "excludedSourceGroups": []
},
"attributeFilters": {
  "excludeTechNews": boolean,
  "excludeAnnouncements": boolean,
  "excludeDigests": boolean
},
"similarMode": "duplicates",
"limit": number,
"sortType": "sourceInfluence",
"sortDirectionType": "desc"| "asc",
"intervalType": "month"|"day"|"quarter"|"year"|"week",
"histogramTypes": [
  "totalDocuments",
  "riskFactors"
]
}

type TObjectResult = {

    "encodedId": string,
    "influence": number,
    "similarCount": number

}


type TTotalDocs = {data: { date: string, value: number }[], histogramType: 'totalDocuments'|'riskFactors'}
type ThistogramResult = TTotalDocs[];

type TFinalHistogramCard = {
  date: string,
  riskFactors: number,
  totalDocs : number

}

type TTariff = {
  name: "Beginner" | "Pro" | "Business"
  description: string
  price: number
  priceWithDiscount: number
  priceCondition: string | null
  includedInPrice: string[]
  bg: string
  svg: string
  textColor:string
}

type TArtcile = {
  attributes: { isTechNews: boolean, isAnnouncement: boolean, isDigest: boolean, isSpeechRecognition: boolean, isReducedContent: boolean }
  content: { markup: string }
  dedupClusterId: string
  entities: { companies: string[], people: string[], themes: string[], locations: string[] }
  id: string
  issueDate: string
  language: "russian" | 'other'| 'unknown' 
  wordCount: number;
  plotClusterId:string
  schemaVersion:string
  source: { id: number, groupId: number, name: string, categoryId: number, levelId: number,}
  title: {text: string, markup:string}
  url:string
  version: number
  }

type TArticleResponse = { ok: TArtcile }[]



type TAuth = {
  login: string,
  password: string
  }
  
  type TToken = {
    accessToken: string,
    expire: string
  }
  
  type TAccInfo = {
    eventFiltersInfo: {
      usedCompanyCount: number,
      companyLimit: number
    }
  }
  


export type { TTariff, TAuth, TToken, TAccInfo, THistogramData,TFinalHistogramCard, ThistogramResult, TArtcile, TObjectResult,  TArticleResponse}

