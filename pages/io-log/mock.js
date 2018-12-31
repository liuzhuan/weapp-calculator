export default [
    {
        date: '2018/12/31',
        time: '12:34',
        items: [
            {
                type: 1, // 条目类型，1 吃, 2 喝, 3 拉, 4 撒
                prefix: '吃', // 前缀，分别为吃，喝水，排便，尿
                content: '蛋糕一块', // 具体内容，当 type = 2 | 4 时，content 为数字类型
            },
            {
                type: 2,
                prefix: '喝水',
                content: '200',
            }
        ],
    },
    {
        date: '2018/12/31',
        time: '14:00',
        items: [
            {
                type: 2, // 条目类型，1 吃, 2 喝, 3 拉, 4 撒
                prefix: '喝水', // 前缀，分别为吃，喝水，排便，尿
                content: '50', // 具体内容，当 type = 2 | 4 时，content 为数字类型
            },
            {
                type: 1,
                prefix: '吃',
                content: '降压药一片',
            }
        ],
    }
]