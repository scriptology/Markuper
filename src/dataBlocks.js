/**
 * Created by asolovyev on 01/11/16.
 */


// list blocks
const dataBlocks = [
    {
        "code": "footer",
        "template": "footer/footer", // путь до шаблона
        "name": "Footer",
        "description": "",
        "children": [
            {
                "code": "footer-social",
                "template": "footer/footer-social",
                "name": "Соц кнопки в подвале",
                "description": ""
            },
            {
                "code": "footer-social--red",
                "template": "footer/footer-social--red",
                "name": "Соц кнопки в подвале красные",
                "description": ""
            }

        ]
    },
    {
        "code": "header",
        "template": "header",
        "name": "Шапка",
        "description": "Короткое описание"
    },
    {
        "code": "social",
        "template": "social",
        "name": "Социальная кнопка",
        "description": "Короткое описание",
    },

];

export default dataBlocks;