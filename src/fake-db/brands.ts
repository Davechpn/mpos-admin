import { BrandTemplate } from "../types/brand";

export const brand_list: BrandTemplate[] = [
    {
        id: '1',
        name: 'Cerevita',
        description:'',
        tags: [],
        image: {
            url: 'https://www.capital30.co.za/182-large_default/nestle-cerevita-corn-and-wheat-500g.jpg',
            is_transparent: false,
            incomplete: false,
            incomplete_message: ""
        },
        threeD_image: null,
        video: "",
        sizes: ['500g'],
        units: [],
        category: 'Cereal',
        addon_categories:['toppings'],
        varieties: ['Corn and wheat', 'Corn and banana'],
        manufacturer: 'Nestlé Zimbabwe (Private) Limited',
        street_address: '38 Samora Machel Avenue',
        city: 'Harare',
        country: 'Zimbabwe',
        email: 'consumer.services@zw.nestle.com',
        tel_numbers: [{name: 'Consumer Services',number: '+263 242 702 393-7'}],
        website: '+263 242 702 393-7',
        draft_notes:"draft notes",
        client_edits: [],
        is_moderated: false,
        moderation_date: 12345,
        moderator_notes:"moderation notes example",
        moderator_id:1,
        is_approved: false,
        created_by: 1,
        created_date: 12345,
        last_modified: 12345,
        Implementation_ratings: [],
        creator_client_id: 1234,
        creator_client_product_id:null,
        from_client_cleaned_by: null,
        has_zero_deposit_order: false,
        has_transparency_all: false,
        is_not_for_under_18: false,
        is_dirty: true
    }, {
        id: '2',
        name: 'Mazoe',
        description:'',
        tags: [],
        image: {
            url: 'https://shop.schweppes.co.zw/221-large_default/mazoe-orange-crush-2-litre-x-6.jpg',
            is_transparent: false,
            incomplete: false,
            incomplete_message: ""
        },
        video: '',
        threeD_image: null,
        sizes: ['1L', '2L'],
        units: [],
        category: 'Beverage',
        addon_categories:['toppings'],
        varieties: ['Orange crush', 'Blackberrry'],
        manufacturer: 'Schweppes',
        street_address: '67a Woolwich Road, Willovale',
        city: 'Harare',
        country: 'Zimbabwe',
        email: 'feedback@schweppes.co.zw',
        tel_numbers: [
            { name: 'Head Office', number: '+2638688002173' },
            { name: 'Harare Beverage Centre', number: '+263 242 620232', }
        ],
        website: 'https://shop.schweppes.co.zw/',
        draft_notes:"draft notes",
        client_edits: [],
        is_moderated: false,
        moderation_date: 12345,
        moderator_notes:"moderation notes example",
        moderator_id:1,
        is_approved: false,
        created_by: 1,
        created_date: 12345,
        last_modified: 12345,
        Implementation_ratings: [],
        creator_client_id: 1234,
        creator_client_product_id:null,
        from_client_cleaned_by: null,
        has_zero_deposit_order: false,
        has_transparency_all: false,
        is_not_for_under_18: false,
        is_dirty: true

    }
]