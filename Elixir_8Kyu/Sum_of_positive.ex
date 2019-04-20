#You get an array of numbers, return the sum of all of the positives ones.

#Example [1,-4,7,12] => 1 + 7 + 12 = 20

defmodule Solution do
  def positive_sum(arr) do
    Enum.reject(arr, fn x -> x < 0 end)
    |> Enum.sum()
  end
end
