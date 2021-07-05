@doc """
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
"""

defmodule MaxDiff do

  def mxdiflg(a1, a2) do
    cond do
    a1 == [] -> -1
    a2 == [] -> -1
    true ->
     list1 = for x <- a1, do: String.length(x)
     list2 = for y <- a2, do: String.length(y)
     list = [Enum.max(list2) - Enum.min(list1)]
     list = [Enum.max(list1) - Enum.min(list2) | list]
     Enum.max(list)
     end
  end

end
