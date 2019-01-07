const request = require('request-promise');
const cheerio = require('cheerio');

class AcoesController {
    constructor(app) {
        app.get('/acoes/:id', AcoesController.get);
    }

    static async get(req, res, next) {
        const options = {
            url: `https://app.tororadar.com.br/acoes/${req.params.id}/`
        };

        const body = await request(options);
        const $ = cheerio.load(body);

        let data = $('table.table td').map((i, elem) => {
            return $(elem).text();
        }).toArray();

        const name = $('div.box-table-cell h2').text();
        $('span').remove();
        const ticket = $('div.emp-nome h1').text();

        const preco = Number($('div.preco').text().trim().replace(',', '.'));

        data = data.map((number) => {
            return Number(number.replace(',', '.').replace('%', ''));
        });

        return res.json({
            name,
            ticket,
            preco,
            min: data[0],
            max: data[1],
            abertura: data[2],
            fechamento: data[3],
            dia: data[4],
            semana: data[5],
            mes: data[6],
            ano: data[7]
        })
    }
}

exports.default = AcoesController;