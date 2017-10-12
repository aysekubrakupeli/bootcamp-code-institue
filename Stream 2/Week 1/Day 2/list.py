from ryotest import *

test_are_equal(3, 3)
test_not_equal(3, 2)
test_is_in([1, 2, 3, 4], 2)
test_is_not_in([1, 2, 3, 4], 2)
print("All test passed")