# If elif else Statement
day = "Tuesday"
if (day == "Monday"):
	print("Today is Monday")
elif (day == "Tuesday"):
	print("Today is Tuesday")
elif (day == "Wednesday"):
	print("Today is Wednesday")
else:
	print("Today is Holiday")


# If elif else with User Input
day = input("Enter Day: ")
if day == "Monday":
	print("Today is Monday")
elif day == "Tuesday":
	print("Today is Tuesday")
elif day == "Wednesday":
	print("Today is Wednesday")
else:
	print("Today is Holiday")

#if elif else in single line
x = 2
print("adult") if x > 18 else print("teenage") if x < 18 and x > 13 else print("child")