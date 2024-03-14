import mysql from 'mysql2'

const con = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Tuguldur_99',
    database:'tuuguu'
}).promise()

export async function Names(){
    const [rows] = await con.query('select * from test')
   return rows
}

export async function s_name(id){
    const [rows] = await con.query(`select * from test where id = ${id}`)
   return rows[0]
}

export async function a_name(name){
   const [result] =  await con.query(`insert into test(name,tulbur) values('${name}',${8000})`)
   const id = result.insertId
   return s_name(id)
}

export async function d_name(id){
    const [result] =  await con.query(`DELETE FROM test WHERE id=${id};`)
    const ids = result.insertId
    return s_name(ids)
 }
 export async function u_name(id,tulbur){
    const [result] =  await con.query(`UPDATE test SET tulbur = ${tulbur} WHERE id = ${id};`)
    const ids = result.insertId
    return s_name(ids)
 }
