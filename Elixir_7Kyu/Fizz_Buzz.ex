@doc """
Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
"""

defmodule FizzBuzz do
  def fizzbuzz(n) do
    Enum.map(1..n, fn
      x when rem(x, 15) == 0 -> "FizzBuzz"
      x when rem(x, 5) === 0 -> "Buzz"
      x when rem(x, 3) === 0 -> "Fizz"
      x -> x
    end)
  end
end
