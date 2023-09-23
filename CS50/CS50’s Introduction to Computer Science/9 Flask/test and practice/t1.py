my_list = [{'symbol': 'A'}, {'symbol': 'AAPL'}, {'symbol': 'Z'}]

# Value to check for existence
value_to_check = "Q"

# Iterate through the list of dictionaries
for dictionary in my_list:
    if "symbol" in dictionary and dictionary["symbol"] == value_to_check:
        print(f"The value '{value_to_check}' exists in the list.")
        break
else:
    print(f"The value '{value_to_check}' does not exist in the list.")
