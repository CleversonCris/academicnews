class StudentQuery {
    insertStudent({id, name, RA, password, email}) {
        `INSERT INTO students (id, name, RA, password, email) values('${id}', '${name}', '${RA}', '${password}', '${email}')`
    }
    deleteStudent({id}) {
        `DELETE FROM students WHERE id = '${id}'`
    }
    updateStudent({id, email, password}) {
        `UPDATE students SET email = '${email}', password = '${password}' WHERE id = ${id}`
    }
}

export const studentQuery = new StudentQuery()