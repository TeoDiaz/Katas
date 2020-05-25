"""
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)

If a value is present in b, all of its occurrences must be removed from the other:

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
"""

defmodule ArrayDiff do
  def array_diff(a, _b) when a == [], do: []
  def array_diff(a, b) do
    Enum.filter(a, fn el -> !Enum.member?(b, el) end)
  end
end

# Other Solutions

defmodule ArrayDiff do
  def array_diff(a, b) do
       a |> Enum.reject(&(&1 in b))
  end
end

# - - - 

defmodule ArrayDiff do
  def array_diff(a, b),do: for n <- a,!Enum.member?(b,n),do: n
end