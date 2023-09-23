import sqlite3

connection = sqlite3.connect("pytest1.db")

cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS first(name TEXT,number INTEGER);")

a="Moatassem"
b=9230006172

cursor.execute("INSERT INTO first(name,number) VALUES (?,?)",(a,b))


cursor.execute("SELECT * FROM first")

print(cursor.fetchall())

print(cursor.fetchone())

cursor.execute("DELETE FROM first WHERE name=?",(a,))
connection.commit()
print(cursor.fetchall())
connection.close()

