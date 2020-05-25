# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Example:
# solution("abc") # should return ["ab", "c_"]
# solution("abcdef") # should return ["ab", "cd", "ef"]

defmodule SplitStrings do
  def solution(""), do: []
  
  def solution(str) do
  str_split = Regex.scan(~r/.{1,2}/, str) |> List.flatten() 
  length = String.length(List.last(str_split))
  
  is_alone?(str_split, length)
  end
  
  def is_alone?(str, 1) do
  last_ele = List.last(str) <> "_"
  
  Enum.drop(str, -1) |> Enum.concat([last_ele])
  end
  
  def is_alone?(str, _) do
    str
  end
end

# Other solutions

defmodule SplitStrings do
  def solution(str) do
    str = str <> "_"
    for <<x, y <- str>>, do: <<x,y>>
  end
end

# - - - 

defmodule SplitStrings do
  def solution(str) do
    str
    |> String.codepoints()
    |> Stream.chunk_every(2, 2, ["_"])
    |> Enum.map(&Enum.join/1)
  end
end