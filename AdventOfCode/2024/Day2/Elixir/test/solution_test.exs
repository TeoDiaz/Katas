defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    assert Solution.part1(example()) == 2 # Example Solution
  end

  test "part 1 with input data" do
    assert Solution.part1(input()) == 326 # Solution
  end

  test "part 2 with example" do
    assert Solution.part2(example()) == 4 # Example Solution
  end

  test "part 2 with input data" do
    assert Solution.part2(input()) == 381 # Solution
  end

  defp example() do
    """
    7 6 4 2 1
    1 2 7 8 9
    9 7 6 2 1
    1 3 2 4 5
    8 6 4 4 1
    1 3 6 7 9
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("day2.txt")
    |> String.split("\n", trim: true)
  end
end
