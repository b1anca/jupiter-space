const listaAlunos = [
	{
		"name": "Simone Lavínia Almada",
		"USPN": "271559007",
		"email": "ssimonelaviniaalmada@econe.com.br",
	},
	{
		"name": "Cecília Stella Raquel Melo",
		"USPN": "424813397",
		"email": "cceciliastellaraquelmelo@pib.com.br",
	},
	{
		"name": "Fábio Emanuel Almeida",
		"USPN": "123549292",
		"email": "fabioemanuelalmeida__fabioemanuelalmeida@tlmix.com.br",
	},
	{
		"name": "Yasmin Stella Raquel Barbosa",
		"USPN": "426892288",
		"email": "yasminstellaraquelbarbosa__yasminstellaraquelbarbosa@efetivaseguros.com.br",
	},
	{
		"name": "Geraldo Fernando Araújo",
		"USPN": "213954308",
		"email": "geraldofernandoaraujo..geraldofernandoaraujo@pronursing.com.br",
	},
	{
		"name": "Adriana Cristiane Isabelle da Cunha",
		"USPN": "466145275",
		"email": "adrianacristianeisabelledacunha__adrianacristianeisabelledacunha@igui.com.br",
	},
	{
		"name": "Luiz Marcos Almeida",
		"USPN": "210691372",
		"email": "luizmarcosalmeida__luizmarcosalmeida@10clic.com.br",
	},
	{
		"name": "Leonardo Paulo Silveira",
		"USPN": "374006568",
		"email": "lleonardopaulosilveira@broutdoor.com.br",
	},
	{
		"name": "Cláudia Lívia Malu Castro",
		"USPN": "125200523",
		"email": "claudialiviamalucastro..claudialiviamalucastro@mindesign.com.br",
	},
	{
		"name": "Leonardo Raimundo da Mata",
		"USPN": "327747274",
		"email": "leonardoraimundodamata_@redex.com.br",
	},
	{
		"name": "Daniel Levi Rezende",
		"USPN": "277162567",
		"email": "ddaniellevirezende@tirantea.com.br",
	},
	{
		"name": "Eliane Emilly Débora Farias",
		"USPN": "436761816",
		"email": "elianeemillydeborafarias..elianeemillydeborafarias@iq.unesp.br",
	},
	{
		"name": "Nathan Benedito Castro",
		"USPN": "476598059",
		"email": "nathanbeneditocastro__nathanbeneditocastro@eguia.com.br",
	},
	{
		"name": "Bryan Victor Lucas Peixoto",
		"USPN": "174728281",
		"email": "bryanvictorlucaspeixoto-75@raninho.com.br",
	},
	{
		"name": "Sérgio Juan Arthur das Neves",
		"USPN": "240772192",
		"email": "sergiojuanarthurdasneves-77@consorciogastau.com.br",
	},
	{
		"name": "Alessandra Emilly Priscila Campos",
		"USPN": "233031789",
		"email": "alessandraemillypriscilacampos..alessandraemillypriscilacampos@gmx.com",
	},
	{
		"name": "Matheus Fábio Tiago Galvão",
		"USPN": "192899983",
		"email": "matheusfabiotiagogalvao-72@prositeweb.com.br",
	},
	{
		"name": "Vicente João Fábio da Luz",
		"USPN": "292564958",
		"email": "vvicentejoaofabiodaluz@viamoc.com.br",
	},
	{
		"name": "Breno Hugo Cauê Bernardes",
		"USPN": "415607528",
		"email": "brenohugocauebernardes_@signatreinamentos.com.br",
	},
	{
		"name": "Aline Josefa Melissa da Mata",
		"USPN": "161070747",
		"email": "alinejosefamelissadamata-88@dyna.com.br",
	},
	{
		"name": "Thiago Alexandre Drumond",
		"USPN": "130413197",
		"email": "tthiagoalexandredrumond@piemme.com.br",
	},
	{
		"name": "Miguel Bryan Moreira",
		"USPN": "116238306",
		"email": "miguelbryanmoreira__miguelbryanmoreira@ficopola.net",
	},
	{
		"name": "Renata Letícia Mariah da Costa",
		"USPN": "176593202",
		"email": "renataleticiamariahdacosta-79@damha.com.br",
	},
	{
		"name": "Heloisa Alícia Mendes",
		"USPN": "445541052",
		"email": "hheloisaaliciamendes@nipnet.com.br",
	},
	{
		"name": "Tereza Ester Ribeiro",
		"USPN": "246920221",
		"email": "terezaesterribeiro__terezaesterribeiro@milimoveis.com.br",
	},
	{
		"name": "Heloise Isabelle Carolina dos Santos",
		"USPN": "411631846",
		"email": "hheloiseisabellecarolinadossantos@mv1.com.br",
	},
	{
		"name": "Vinicius Edson Souza",
		"USPN": "366321213",
		"email": "viniciusedsonsouza..viniciusedsonsouza@prifree.fr",
	},
	{
		"name": "Geraldo Pedro Aragão",
		"USPN": "236309286",
		"email": "geraldopedroaragao-99@jp.ind.br",
	},
	{
		"name": "Vinicius Jorge Galvão",
		"USPN": "154102805",
		"email": "viniciusjorgegalvao-91@db9.com.br",
	},
	{
		"name": "Milena Vera Pires",
		"USPN": "139952871",
		"email": "milenaverapires__milenaverapires@creativeinteriores.com.br",
	},
	{
		"name": "Calebe Mateus Teixeira",
		"USPN": "365218303",
		"email": "calebemateusteixeira_@catsfeelings.com.br",
	},
	{
		"name": "Marcela Hadassa Monteiro",
		"USPN": "191990577",
		"email": "marcelahadassamonteiro-74@trt15.jus.br",
	},
	{
		"name": "Caio Bryan Fernando Pires",
		"USPN": "302031807",
		"email": "caiobryanfernandopires..caiobryanfernandopires@dominiozeladoria.com.br",
	},
	{
		"name": "Renata Caroline Isabel Corte Real",
		"USPN": "182671537",
		"email": "renatacarolineisabelcortereal__renatacarolineisabelcortereal@grupoannaprado.com.br",
	},
	{
		"name": "Gael Thales Kaique Cardoso",
		"USPN": "178964608",
		"email": "gaelthaleskaiquecardoso..gaelthaleskaiquecardoso@stembalagens.com.br",
	},
	{
		"name": "Murilo Marcos Vinicius Duarte",
		"USPN": "188947966",
		"email": "murilomarcosviniciusduarte..murilomarcosviniciusduarte@fundasa.com.br",
	},
	{
		"name": "Luzia Allana Carolina Gomes",
		"USPN": "384469401",
		"email": "luziaallanacarolinagomes-89@pontofinalcafe.com.br",
	},
	{
		"name": "Isadora Sebastiana Luna Brito",
		"USPN": "189756111",
		"email": "iisadorasebastianalunabrito@munhozengenharia.com.br",
	},
	{
		"name": "Lucca Theo Miguel Ribeiro",
		"USPN": "491766221",
		"email": "luccatheomiguelribeiro_@mls.com.br",
	},
	{
		"name": "Davi Pedro Henrique Anthony Carvalho",
		"USPN": "139035035",
		"email": "davipedrohenriqueanthonycarvalho__davipedrohenriqueanthonycarvalho@img.com.br",
	},
	{
		"name": "Renata Bruna da Conceição",
		"USPN": "173572911",
		"email": "renatabrunadaconceicao_@zian.com.br",
	},
	{
		"name": "Anderson Francisco Severino Jesus",
		"USPN": "181131444",
		"email": "andersonfranciscoseverinojesus..andersonfranciscoseverinojesus@grupova.com.br",
	},
	{
		"name": "Julia Ester Novaes",
		"USPN": "481947759",
		"email": "juliaesternovaes__juliaesternovaes@maliziaarranjosflorais.com.br",
	},
	{
		"name": "Larissa Rosângela Rodrigues",
		"USPN": "451627969",
		"email": "larissarosangelarodrigues-85@torah.com.br",
	},
	{
		"name": "Leonardo Noah Osvaldo Cardoso",
		"USPN": "378997695",
		"email": "lleonardonoahosvaldocardoso@bodyfast.com.br",
	},
	{
		"name": "Felipe Sebastião Rafael das Neves",
		"USPN": "412573416",
		"email": "felipesebastiaorafaeldasneves-70@poligerma.com.br",
	},
	{
		"name": "Marli Aline Antonella Mendes",
		"USPN": "203449149",
		"email": "mmarlialineantonellamendes@oi.com.br",
	},
	{
		"name": "Antonio Ryan Guilherme Baptista",
		"USPN": "203978778",
		"email": "antonioryanguilhermebaptista_@yoma.com.br",
	},
	{
		"name": "Isabelle Juliana Daiane Aparício",
		"USPN": "326227969",
		"email": "isabellejulianadaianeaparicio-71@bat.com",
	},
	{
		"name": "Isabela Cristiane Teixeira",
		"USPN": "185691559",
		"email": "isabelacristianeteixeira..isabelacristianeteixeira@mushsanches.com",
	},
	{
		"name": "Carolina Malu Fátima Almeida",
		"USPN": "500035489",
		"email": "carolinamalufatimaalmeida__carolinamalufatimaalmeida@lucaslima.com",
	},
	{
		"name": "Tiago Osvaldo Drumond",
		"USPN": "136170183",
		"email": "tiagoosvaldodrumond__tiagoosvaldodrumond@marcenariamagno.com.br",
	},
	{
		"name": "Raul Kaique Peixoto",
		"USPN": "201204745",
		"email": "raulkaiquepeixoto..raulkaiquepeixoto@larioja.com.br",
	},
	{
		"name": "Melissa Giovana Melo",
		"USPN": "301819646",
		"email": "melissagiovanamelo..melissagiovanamelo@racml.com.br",
	},
	{
		"name": "Manuel Renan Rocha",
		"USPN": "406903736",
		"email": "mmanuelrenanrocha@hotmaill.com",
	},
	{
		"name": "Luís Enzo Antonio Caldeira",
		"USPN": "102879084",
		"email": "lluisenzoantoniocaldeira@camilapassos.com.br",
	},
	{
		"name": "Olivia Giovana Martins",
		"USPN": "346531299",
		"email": "oliviagiovanamartins-79@cursomarcato.com.br",
	},
	{
		"name": "Kevin Manoel Henrique Peixoto",
		"USPN": "369049147",
		"email": "kevinmanoelhenriquepeixoto-72@tpltransportes.com.br",
	},
	{
		"name": "Caroline Giovanna Isabelle Silveira",
		"USPN": "427384606",
		"email": "carolinegiovannaisabellesilveira__carolinegiovannaisabellesilveira@bessa.net.br",
	},
	{
		"name": "Nathan Bruno Luan Moraes",
		"USPN": "399324306",
		"email": "nathanbrunoluanmoraes..nathanbrunoluanmoraes@maccropropaganda.com.br",
    },
	{
		"name": "Gabriel Cauã da Rosa",
		"USPN": "450332573",
		"email": "gabrielcauadarosa..gabrielcauadarosa@ativacofres.com.br",
	},
	{
		"name": "Otávio Guilherme Almada",
		"USPN": "242632014",
		"email": "ootavioguilhermealmada@gruposimoes.com.br",
	},
	{
		"name": "Enrico Francisco Otávio Baptista",
		"USPN": "113388597",
		"email": "eenricofranciscootaviobaptista@mega-vale.com",
	},
	{
		"name": "Sandra Isabela Monteiro",
		"USPN": "223689634",
		"email": "sandraisabelamonteiro..sandraisabelamonteiro@navescorat.com.br",
	},
	{
		"name": "Raimundo Nathan da Paz",
		"USPN": "347567885",
		"email": "raimundonathandapaz__raimundonathandapaz@djapan.com.br",
	},
	{
		"name": "Rayssa Jéssica dos Santos",
		"USPN": "385387143",
		"email": "rrayssajessicadossantos@outlook.com",
	},
	{
		"name": "Alessandra Giovanna da Costa",
		"USPN": "253043554",
		"email": "aalessandragiovannadacosta@unitau.br",
	},
	{
		"name": "Noah Felipe Rocha",
		"USPN": "337600582",
		"email": "noahfeliperocha-95@companhiadigital.net",
	},
	{
		"name": "Eduarda Mariana Benedita Rocha",
		"USPN": "262552887",
		"email": "eduardamarianabeneditarocha..eduardamarianabeneditarocha@trbvm.com",
	},
	{
		"name": "Bárbara Amanda Luna Fernandes",
		"USPN": "277114354",
		"email": "barbaraamandalunafernandes..barbaraamandalunafernandes@tec3.com.br",
	},
	{
		"name": "Elisa Isabella Antônia da Rosa",
		"USPN": "155640513",
		"email": "elisaisabellaantoniadarosa_@live.ie",
	},
	{
		"name": "Carlos Eduardo Raul Barbosa",
		"USPN": "287103596",
		"email": "carloseduardoraulbarbosa__carloseduardoraulbarbosa@jarretta.com",
	},
	{
		"name": "Yasmin Helena Simone Pires",
		"USPN": "346001687",
		"email": "yasminhelenasimonepires..yasminhelenasimonepires@carubelli.com.br",
	},
	{
		"name": "Marli Amanda Flávia Alves",
		"USPN": "358579971",
		"email": "marliamandaflaviaalves-87@jerasistemas.com.br",
	},
	{
		"name": "Laura Luna Almeida",
		"USPN": "190632562",
		"email": "lauralunaalmeida..lauralunaalmeida@realbit.com.br",
	},
	{
		"name": "Sara Eduarda da Paz",
		"USPN": "399272896",
		"email": "ssaraeduardadapaz@superativacoop.com.br",
	},
	{
		"name": "Fábio Enzo Cauã Barros",
		"USPN": "208798171",
		"email": "fabioenzocauabarros__fabioenzocauabarros@andrelam.com.br",
	},
	{
		"name": "Ester Eduarda da Rosa",
		"USPN": "305684462",
		"email": "estereduardadarosa..estereduardadarosa@abareias.com.br",
	},
	{
		"name": "Giovana Fernanda Aparício",
		"USPN": "408922369",
		"email": "giovanafernandaaparicio-90@azulcargo.com.br",
	},
	{
		"name": "José Gabriel Araújo",
		"USPN": "194708433",
		"email": "josegabrielaraujo__josegabrielaraujo@imeio.com",
	},
	{
		"name": "Pedro Severino Carvalho",
		"USPN": "281786501",
		"email": "pedroseverinocarvalho-92@negocios-de-valor.com",
	},
	{
		"name": "Raul Arthur Figueiredo",
		"USPN": "182307979",
		"email": "raularthurfigueiredo_@xerocopiadora.com.br",
	},
	{
		"name": "Ester Aline Priscila Campos",
		"USPN": "417061699",
		"email": "esteralinepriscilacampos..esteralinepriscilacampos@andrade.com",
	},
	{
		"name": "Daniel Bento Freitas",
		"USPN": "315219385",
		"email": "danielbentofreitas..danielbentofreitas@tecnew.net",
	},
	{
		"name": "Eloá Manuela Carvalho",
		"USPN": "500930983",
		"email": "eeloamanuelacarvalho@detorsul.com",
	},
	{
		"name": "Antônia Fernanda Campos",
		"USPN": "414759977",
		"email": "antoniafernandacampos..antoniafernandacampos@capua.com.br",
	},
	{
		"name": "Gustavo Joaquim Miguel Barbosa",
		"USPN": "455455752",
		"email": "gustavojoaquimmiguelbarbosa_@fundasa.com.br",
	},
	{
		"name": "Elza Cláudia Josefa da Conceição",
		"USPN": "272096805",
		"email": "elzaclaudiajosefadaconceicao-99@ci.com.br",
	},
	{
		"name": "Larissa Liz Ayla Duarte",
		"USPN": "496974671",
		"email": "larissalizayladuarte_@santosdumonthospital.com.br",
	},
	{
		"name": "Tânia Rafaela Louise Sales",
		"USPN": "490211896",
		"email": "taniarafaelalouisesales__taniarafaelalouisesales@transmazza.com.br",
	}
]

export default listaAlunos;