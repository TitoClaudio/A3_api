import { openDb } from "../db/connection.js"

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Perguntas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(255), feijao INTEGER, frutassecas INTEGER, verduraslegumes INTEGER, hamburguersembutidos INTEGER, bebidasadocadas INTEGER, miojo INTEGER, bolacha INTEGER)')
            .then(_ => console.log('tabela criada'))
    })
}

export async function getMethod(req, response) {
    return openDb().then(db => {
        return db.all('SELECT * FROM Perguntas')
            .then(res => {
                response.json(res)
            })
    })
}

export async function deleteMethod(req, response) {
    return openDb().then(db => {
        return db.run('DELETE FROM Perguntas where id=?', [req.body.id])
            .then(res => {
                res
                response.send("ok")
            })
    })
}


export async function updateById(req, response) {
    const {id, nome, feijao, frutassecas, verduraslegumes, hamburguersembutidos, bebidasadocadas, miojo, bolacha} = req.body
       return openDb().then(db => {
        return db.run(`UPDATE Perguntas SET nome=?, feijao=?, frutassecas=?, verduraslegumes=?, hamburguersembutidos=?, bebidasadocadas=?, miojo=?, bolacha=? where id=?`, [nome, feijao, frutassecas, verduraslegumes, hamburguersembutidos, bebidasadocadas, miojo, bolacha, id])
            .then(res => {
                res
                response.send("ok")
            })
    })
    
     

}

export async function postMethod(req, response) {
    const {nome, feijao, frutassecas, verduraslegumes, hamburguersembutidos, bebidasadocadas, miojo, bolacha} = req.body
    openDb().then(db => {
        db.run("INSERT INTO Perguntas (nome, feijao, frutassecas, verduraslegumes, hamburguersembutidos, bebidasadocadas, miojo, bolacha) values (?, ?, ?, ?, ?, ?, ?, ?)", [nome, feijao, frutassecas, verduraslegumes, hamburguersembutidos, bebidasadocadas, miojo, bolacha]).then(_ => {response.send("ok")})


    })


}

export async function gambiarra() {
    openDb().then(db => {
        db.run("drop table Perguntas")
    })
}
