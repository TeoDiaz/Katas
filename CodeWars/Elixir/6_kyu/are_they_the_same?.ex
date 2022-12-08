"""
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
"""

defmodule Aretheythesame do

  @spec comp([number], [number]) :: boolean
  def comp(a, b) do
  
    Enum.reduce(a, [], fn x, acc -> 
      [x*x | acc]
    end) |> Enum.reverse |> Enum.sort() |> is_true?(Enum.sort(b))
  end
  
  def is_true?(new_list, b) when new_list == b do
    true
  end
  
  def is_true?(_new_list, _b), do: false
end

# Other solutions

defmodule Aretheythesame do

  @spec comp([number], [number]) :: boolean
  def comp(a, b) do
    a |> Enum.map(&(&1*&1)) |> Enum.sort == b |> Enum.sort
  end
end

