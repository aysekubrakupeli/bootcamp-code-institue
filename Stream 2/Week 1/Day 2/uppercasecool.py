# def count_upper_case(message):
#     count = 0
#     for c in message: 
#         if c.isupper():
#             count += 1
#     return count
    
# Also works

def count_upper_case(message):
            return sum([1 for c in message if c.isupper()])
    
assert count_upper_case("") == 0, "Empty String"
assert count_upper_case("A") == 1, "One upper case"
assert count_upper_case("a") == 0, "One lower case"
assert count_upper_case("$%^&") == 0, "Only special caracters"
assert count_upper_case("Ab") == 1, "One of two caracters is upper case"
assert count_upper_case("ab") == 0, "Both caracters are lower case"
assert count_upper_case("$%a^B") == 1, "There is one upper case in this string"
assert count_upper_case("@#$abs#$%") == 0, "There is no upper case in this string"
assert count_upper_case("ABC") == 3, "There are three upper case letters"
assert count_upper_case("AbcDE") == 3, "There are three upper case letters"


print("All tests pass")

    
