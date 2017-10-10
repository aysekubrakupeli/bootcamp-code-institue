def count_upper_case(message):
            return sum([2 if c.isupper() else 1 if c.islower() else 0 for c in message])
            
assert count_upper_case("A") == 2, "One upper case"
assert count_upper_case("a") == 1, "One lower case"
assert count_upper_case("$%^&") == 0, "Only special caracters"
assert count_upper_case("Ab") == 3, "One of two caracters is upper case"
assert count_upper_case("ab") == 2, "Both caracters are lower case"
assert count_upper_case("$%a^B") == 3, "There is one upper case in this string"
assert count_upper_case("ABC") == 6, "There are three upper case letters"
assert count_upper_case("AbcDE") == 8, "There are three upper case letters"

print("All test pass")
