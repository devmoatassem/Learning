
import os
import sqlite3


def create_user_db(path,id,username):
    try:
        directory_path = (f"{path}/{id}")
        if not os.path.exists(directory_path):
            os.makedirs(f"{path}/{id}")
            conn = sqlite3.connect(f"{path}/{id}/{username}.db")
            
            # Close the database connection when done
            conn.close()
            return True
        elif not os.path.exists(f"{directory_path}/{username}.db") and os.path.exists(directory_path):
            conn = sqlite3.connect(f"{path}/{id}/{username}.db")
            conn.close()
            return True
        else:
            return False
    except Exception as e:
        return print(e)

create_user_db("../Database/user-databases",1,"test2o1")