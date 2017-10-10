def increment(n):
    return n + 1

def test_are_equal(actual, expected):
            assert expected == actual, "Expected {0}, got {1}".format(expected, actual)

def test_not_equal(a, b):
            assert a != b, "Did not expect {0}, but got {1}.".format(a, b)
            
test_not_equal(increment(5), 5)

print("All tests passed")