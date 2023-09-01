import { Feature, FeatureType } from "../types/feature";

export const features:Feature[] = [
    {
        id: '1',
        name:'Stock Diary',
        description:'Track inventory activity',
        type:FeatureType.Free,
        industries:['retail'],
        countries:['Zambia']
    },
    {   id: '2',
        name:'Scan',
        description:'Sell products by scanning',
        type:FeatureType.Premium,
        industries:['retail'],
        countries:['Zambia']
    }

]