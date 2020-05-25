"""
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
"""


even=$(( $* % 2 ))

if [ $even -eq 0 ]
then
    echo "Even"
else
    echo "Odd"
fi

# Other Solutions

if [ $(($1 % 2)) -eq 0 ]
  then echo "Even"
  else echo "Odd"
fi

# - - - 

(( $1 & 1 )) && echo "Odd" || echo "Even"