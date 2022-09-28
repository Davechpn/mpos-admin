import { Brand } from "../types/brand";

export const brand_list: Brand[] = [
    {
        id: '1',
        name: 'Cerevita',
        image: 'https://www.gain.co.zw/pub/media/catalog/product/cache/d584f38dd7a592cff619dd826d23b5d1/n/e/nestle_cerevita_corn_and_banana_breakfast_cereal_500g.png',
        sizes: ['500g'],
        category: 'Cereal',
        varieties: ['Corn and wheat', 'Corn and banana'],
        producer: 'Nestlé Zimbabwe (Private) Limited',
        street_address: '38 Samora Machel Avenue',
        city: 'Harare',
        country: 'Zimbabwe',
        contacts: [{
            name: 'Consumer Services',
            address: '',
            city: '',
            email: 'consumer.services@zw.nestle.com',
            cell: '',
            tell: '+263 242 702 393-7',
            country: 'Zimbabwe',
        }],
        website: '+263 242 702 393-7'
    }, {
        id: '2',
        name: 'Mazoe',
        image: 'https://shop.schweppes.co.zw/221-large_default/mazoe-orange-crush-2-litre-x-6.jpg',
        sizes: ['1L', '2L'],
        category: 'Beverage',
        varieties: ['Orange crush', 'Blackberrry'],
        producer: 'Schweppes',
        street_address: '67a Woolwich Road, Willovale',
        city: 'Harare',
        country: 'Zimbabwe',
        contacts: [{
            name: 'Head Office',
            address: '67a Woolwich Road Willovale ',
            city: 'Harare',
            email: 'feedback@schweppes.co.zw',
            cell: '+2638677020416',
            tell: '+2638688002173',
            country: 'Zimbabwe',
        },
        {
            name: 'Harare Beverage Centre',
            address: '505 Gleneagles Road, Willowvale',
            city: 'Harare',
            email: '',
            cell: '',
            tell: '+263 242 620232',
            country: 'Zimbabwe',
        }
        ],
        website: 'https://shop.schweppes.co.zw/'

    }
]