@doc """
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
"""

defmodule VowelCount do
  def get_count(str) do
    length(Regex.scan(~r/[aeiou]/i,str))
  end
end
