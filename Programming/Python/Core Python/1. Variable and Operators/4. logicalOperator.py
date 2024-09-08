#Logical and
a = 5
b = 2
c = 3
d = 200

print("******* Logical and *******")
print(a>b and a>c)
print(a>b and a<c)
print(a<b and a>c)
print(a<b and a<c)
print(a>b and c)
print(a>b and c and d)
print(a<b and c)
print(a<b and c and d)

#Logical or
print("******* Logical or *******")
print(a>b or a>c)
print(a>b or a<c)
print(a<b or a>c)
print(a<b or a<c)
print(a>b or c)
print(a>b or c or d)
print(a<b or c)
print(a<b or c or d)

#Logical not
print("******* Logical not *******")
print(not(a<b))
print(not(a>b))

# Logical operator chaining
# Python code to illustrate
# chaining comparison operators
x = 5
print(1 < x < 10)
print(10 < x < 20 )
print(x < 10 < x*10 < 100)
print(10 > x <= 9)
print(5 == x > 4)
