export const chatData = [
    {
        id: 1,
        isSelf: false,
        message: 'Hi Sam! I am your personal shopping assistant , how can i help you today ?',
        time: '10:00 AM'
    },
    {
        id: 2,
        isSelf: true,
        message: 'I am looking for a hand bag, with long strap .',
        time: '10:01 AM'
    },
    {
        id: 3,
        isSelf: false,
        type: 'aiSuggestion',
        suggestion: {
            suggestiontitle: "Popular tags for handbag",
            suggestionType: 'tags',
            tags: [
                'handbag',
                'long strap',
                'leather',
                'black',
                'brown',
                'handbag',
                'long strap',
                'leather',
                'black',
                'brown'
            ]
        },
        hasProduct: 'true',
        promotedCategory: {
            productCount: "1123",
            productTitle: "Bags on Timpu",
            productImage: "../../public/assets/handbag.png"
        },
        message: 'Or set a filter and help us choose best handbag for you',
        time: '10:01 AM'
    },
    {
        id: 4,
        isSelf: false,
        type: 'aiSuggestion',
        suggestion: {
            suggestiontitle: "Select Filters",
            suggestionType: 'filters',
            filters: [
               'Strap - Long',
               'Color',
               'Size',
               'Material',
               'Brand'
            ]
        },
     

        blankMessage: "true",
        time: '10:03 AM'
    },

]