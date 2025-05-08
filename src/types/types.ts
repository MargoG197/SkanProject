type THistogramData = {
    intervalType: string,
    histogramTypes: number[],
    issueDateInterval: {
      startDate: string,
      endDate: string
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: string
          }
        ],
        onlyMainRole: boolean,
        tonality: string,
        onlyWithRiskFactors: boolean,
        riskFactors: {
          and: [
            {
              id: number
            }
          ],
          or: [
            {
              id: number
            }
          ],
          not: [
            {
              id: number
            }
          ]
        },
        themes: {
          and: [
            {
            tonality: string,
            entityId: number
            }
          ],
          or: [
            {
              tonality: string,
              entityId: number
            }
          ],
          not: [
            {
              tonality: string,
              entityId: number
            }
          ]
        }
      },
      searchEntitiesFilter: {
        and: [
          {
          type: string
          }
        ],
        or: [
          {
            type: string
          }
        ],
        not: [
          {
            type: string
          }
        ]
      },
      locationsFilter: {
        and: [
          {
            countryCode: string,
            regionCode: number
          }
        ],
        or: [
          {
            countryCode: string,
            regionCode: number
          }
        ],
        not: [
          {
            countryCode: string,
            regionCode: number
          }
        ]
      },
      themesFilter: {
        and: [
          {
            entityId: number
          }
        ],
        or: [
          {
            entityId: number
          }
        ],
        not: [
          {
            entityId: number
          }
        ]
      }
    },
    searchArea: {
      includedSources: number[],
      excludedSources: number[],
      includedSourceGroups: number[],
      excludedSourceGroups: number[],
      includedDistributionMethods: number[],
      excludedDistributionMethods: number[],
 },
    attributeFilters: {
      excludeTechNews: boolean,
      excludeAnnouncements: boolean,
      excludeDigests: boolean
    },
    similarMode: string
}
  
type TobjSearchResult = {
  items: [
    {
      encodedId: string,
      influence: number,
      similarCount: number
    }
  ],
  mappings: [
    {
      sparkId: number,
      inn: string,
      entityIds: number[]
    }
  ]
}

type ThistogramResult = {
  data: [
    {
      data: [
        {
          date: string,
          value: number
        }
      ],
      histogramType: number
    }
  ]
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
  
type TArtcile = {
  
    date: string;
    source: string;
    title: string;
    category: string;
    content: string[];
    readMoreLink: string;
    wordCount: number;

  }

export type { TTariff, TAuth, TToken, TAccInfo, THistogramData, TobjSearchResult, ThistogramResult, TArtcile}

