""""
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26
"""

defmodule Kata do
  @vowels ~r/(a|e|i|o|u)/i

   @values_map  %{
     "a" => 1,
     "b" => 2,
     "c" => 3,
     "d" => 4,
     "e" => 5,
     "f" => 6,
     "g" => 7,
     "h" => 8,
     "i" => 9,
     "j" => 10,
     "k" => 11,
     "l" => 12,
     "m" => 13,
     "n" => 14,
     "o" => 15,
     "p" => 16,
     "q" => 17,
     "r" => 18,
     "s" => 19,
     "t" => 20,
     "u" => 21,
     "v" => 22,
     "w" => 23,
     "x" => 24,
     "y" => 25,
     "z" => 26,
     "" => 0
     }

   def solve(s) do
     @vowels
     |> Regex.split(s)
     |> Enum.map(fn str -> take_sum(str) end)
     |> Enum.max()
   end

   def take_sum(str) do
     String.codepoints(str) |> Enum.map(fn x -> @values_map[x] end) |> Enum.sum
   end
 end
 
 
 # Other solutions
 
 
 defmodule Kata do
  def solve(s) do
    s
    |> String.split(["a", "e", "i", "o", "u"])
    |> Enum.map(fn(sub) -> sub
      |> String.to_charlist()
      |> Enum.map(&(&1 - 96))
      |> Enum.sum
    end)
    |> Enum.max
  end
end

# - - - 

defmodule Kata do
  def solve(s) do
    s 
    |> String.split(~r{a|e|i|o|u}, trim: true)
    |> Enum.map(&(sum(&1)))
    |> Enum.max
  end
  defp sum(<<char::utf8>>), do: char - 96
  defp sum(<<char::utf8, rest::binary>>) do
    char - 96 + sum(rest)
  end
end
