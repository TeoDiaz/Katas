"""
This time no story, no theory. The examples below show you how to write function accum:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
"""

defmodule Mumbling do
  
  def accum(str) do
     str
    |> String.graphemes
    |> Enum.with_index
    |> Enum.map(&duplicate/1)
    |> Enum.join("-")
  end
  
   def duplicate({letter, index}) do
    letter
    |> String.duplicate(index+1)
    |> String.capitalize
  end
end

# Other Solutions

defmodule Mumbling do
  
  def accum(s) do
    String.graphemes(s)
    |> Enum.with_index(1)
    |> Enum.map_join("-", fn {elem, times} -> String.duplicate(elem, times) |> String.capitalize end)
  end
  
end
