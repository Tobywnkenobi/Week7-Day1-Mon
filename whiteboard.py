'''
# Complete the function scramble(str1, str2) that returns true 
# if a portion of str1 characters can be rearranged to match str2,
# otherwise returns false.

# Notes:

# Only lower case letters will be used (a-z)
# No punctuation or digits will be included.

# scramble('rkqodlw', 'world') ==> True
# scramble('cedewaraaossoqqyt', 'codewars') ==> True
# scramble('katas', 'steak') ==> False

'''
def scramble(str1, str2):
    cnt_str1 = {}
    cnt_str2 = {}
    for char in str1:
        cnt_str1[char] = cnt_str1.get(char, 0) + 1

    for char in str2:
        cnt_str2[char] = cnt_str2.get(char, 0) + 1

    for char, count in cnt_str2.items():
        if char not in cnt_str1 or cnt_str1[char] < count:
            return False
    return True


#test cases
print(scramble('rkqodlw', 'world'))  # True
print(scramble('cedewaraaossoqqyt', 'codewars'))  # True
print(scramble('katas', 'steak'))  # False
