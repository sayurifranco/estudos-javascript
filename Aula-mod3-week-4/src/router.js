module.exports = (app) => {
    app.get('/', function(request, response) {
        response.send(
        `
            <!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <body>
                        Última School Server
                    </body>
                </head>
            </html>
            `
            );
        }); //aqui é uma callback function
       
        app.get('/alunos', function(request, response) {
        response.send(
        `            
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Última School</title>
            </head>
        <body>
            <h1>Listagem de Alunos</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Matrícula</td>
                        <td>Nome do Aluno</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>01854229</td>
                        <td>João Rodrigo Brandão</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>05784574</td>
                        <td>Ana Maria da Silva</td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
        `
        );
    });

    app.get('/professores', function(request, response) {
        response.send(
        `            
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Última School</title>
            </head>
        <body>
            <h1>Listagem de Professores Cadastrados</h1>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Matrícula</td>
                        <td>Nome do Professor</td>
                        <td>Curso</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>01854229</td>
                        <td>João Rodrigo Brandão</td>
                        <td>Javascript</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>05784574</td>
                        <td>Ana Maria da Silva</td>
                        <td>Java e Programação OO</td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
        `
        );
    });
}